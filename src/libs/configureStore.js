'use strict';

import {createStore, applyMiddleware, compose} from 'redux';
import Reactotron from 'reactotron-react-native'
import createSagaMiddleware from 'redux-saga';
import {rootReducer} from '../reducers';
import sagas from './../sagas';
import {createLogger} from 'redux-logger'

// the logger master switch
const USE_LOGGING = false

// silence these saga-based messages
const SAGA_LOGGING_BLACKLIST = ['EFFECT_TRIGGERED', 'EFFECT_RESOLVED', 'EFFECT_REJECTED']

// create the logger
const logger = createLogger({
    predicate: (getState, {type}) => USE_LOGGING && not(contains(type, SAGA_LOGGING_BLACKLIST))
})

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators,
        // serialize...
    })
    : compose;

// a function which can create our store and auto-persist the data
export default() => {
    const sagaMiddleware = createSagaMiddleware({
        sagaMonitor: Reactotron.createSagaMonitor()
    })
    const enhancer = composeEnhancers(
    // applyMiddleware(logger, sagaMiddleware),
    applyMiddleware(sagaMiddleware),
    // other store enhancers if any
    );
    // const middleware =enhancer
    const store = Reactotron.createStore(rootReducer, enhancer)
    sagaMiddleware.run(sagas)
    return store
}

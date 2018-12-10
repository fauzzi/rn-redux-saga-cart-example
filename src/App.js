/**
 * Created by Akhmad Fauzi Hasibuan on 11/15/2018.
 * akhmadfauzihasibuan@gmail.com
 * https://www.linkedin.com/in/fauzzi
 * https://github.com/fauzzi
 * https://twitter.com/twitt_fauzi
 * This file is main the app and implemented to redux store configuration
 */

import React, {Component} from 'react'
import {Provider} from 'react-redux'
import'./libs/ReactotronConfig' 
import configureStore from './libs/configureStore'
const store= configureStore()

import ShopContainer from './containers/Shop';
// Pass the store into the Provider
class App extends Component {
    render() {
        return (
        <Provider store={store}>
            <ShopContainer/>
        </Provider>
        
        )
    }
}

export default App;
import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import ProductList from './ProductList'
import Cart from './Cart'
import HR from './../../components/HR'
import Label from './../../components/Label'

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Label style={styles.center}>Shop Cart Sample</Label>
                <HR/>
                <ProductList/>
                <HR/>
                <Cart/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
    },
    center: {
        textAlign: 'center',
        marginVertical: 20
    },
    wrapper: {
        marginHorizontal: 20
    }
})

import React, {Component} from 'react'
import {TouchableOpacity} from 'react-native'
import PropTypes from 'prop-types'
import Product from './Product'
import Label from './../../components/Label'

export default class CartItem extends Component {
    render() {
        const {price, quantity, title, onRemove} = this.props

        const removeCartAction = (
            <TouchableOpacity onPress={onRemove}>
                <Label>
                    X
                </Label>
            </TouchableOpacity>
        )

        return (<Product
            price={price}
            quantity={quantity}
            title={title}
            action={removeCartAction}/>)
    }
}

CartItem.propTypes = {
    price: PropTypes.number,
    quantity: PropTypes.number,
    title: PropTypes.string,
    onRemove: PropTypes.func.isRequired
}
import React, { Component } from 'react'
import {View, TouchableOpacity, StyleSheet} from 'react-native'
import PropTypes from 'prop-types'
import CartItem from './CartItem'
import { connect } from 'react-redux'
import { checkout, removeFromCart } from '../../actions'
import { getTotal, getCartProducts, getCheckoutError, isCheckoutPending } from '../../reducers'
import Label from '../../components/Label';

class Cart extends Component {
  render() {
    const { products, total, error, checkoutPending, checkout, removeFromCart } = this.props

    const hasProducts = products.length > 0
    const checkoutAllowed = hasProducts && !checkoutPending

    const nodes = !hasProducts ? (
      <Label>Please add some products to cart.</Label>
    ) : (
      products.map(product => (
        <CartItem
          title={product.title}
          price={product.price}
          quantity={product.quantity}
          key={product.id}
          onRemove={() => removeFromCart(product.id)}
        />
      ))
    )

    // disabled={checkoutAllowed ? '' : 'disabled'}
    return (
      <View style={styles.container}>
        <Label style={styles.title}>Your Cart</Label>
        <View style={styles.container}>{nodes}</View>
        <Label style={styles.title}>Total: &#36;{total}</Label>
        
        <View style={styles.container}>                    
            <TouchableOpacity style={styles.checkoutButton} onPress={checkout}>
            <Label>Checkout</Label> 
            </TouchableOpacity>
            <Label style={{ color: 'red' }}>{error}</Label>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        marginHorizontal: 10
    },
    title: {
        marginLeft: 10
    },
    checkoutButton : {
        marginTop : 20
    }
})


Cart.propTypes = {
  // data
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    }),
  ).isRequired,
  total: PropTypes.string,
  error: PropTypes.string,
  checkoutPending: PropTypes.bool,

  // actions
  checkout: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
}

export default connect(
  state => ({
    products: getCartProducts(state),
    total: getTotal(state),
    error: getCheckoutError(state),
    checkoutPending: isCheckoutPending(state),
  }),
  { checkout, removeFromCart },
)(Cart)

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import Label from '../../components/Label';

export default class ProductItem extends Component {
  
  render() {
    {/* disabled={product.inventory > 0 ? '' : 'disabled'} */}
    const { product } = this.props
    const addToCartAction = (
      <TouchableOpacity onPress={this.props.onAddToCartClicked}>      
       <Label> {product.inventory > 0 ? 'Add to cart' : 'Sold Out'} </Label>
      </TouchableOpacity>
    )

    return (
      <View style={styles.container}>
        <Product title={product.title} price={product.price} action={addToCartAction} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
     marginVertical : 10
  }
})


ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired,
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired,
}

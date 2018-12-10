import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {View, Text, StyleSheet} from 'react-native'
import Label from './../../components/Label'

export default class Product extends Component {
  render() {
    const { price, quantity, title, action } = this.props
    return (
      <View style={styles.container}>
        <Label>{title}</Label>
        <Label>- &#36;{price}</Label>
        <Label>{quantity ? `x ${quantity}` : null}</Label>
        <View>
          {action}
        </View>        
      </View>
      // <Text>
      //   {title} - &#36;{price} {quantity ? `x ${quantity}` : null} {action}
      // </Text>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex : 0,
    flexDirection: 'row',
    justifyContent : 'space-between',
    alignItems: 'center',
     marginVertical : 10
  }
})


Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string,
  action: PropTypes.node,
}

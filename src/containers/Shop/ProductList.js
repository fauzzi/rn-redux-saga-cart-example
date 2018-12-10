import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'
import PropTypes from 'prop-types'
import ProductItem from './ProductItem'

import {connect} from 'react-redux'
import {addToCart} from './../../actions'
import {getVisibleProducts} from './../../reducers/products'
import Label from './../../components/Label'

class ProductList extends Component {
    render() {
        const {products, addToCart} = this.props
        return (
            <View style={styles.container}>
                <Label style={styles.title}>Products</Label>
                <View style={styles.container}>
                    {products.map(product => (<ProductItem
                        key={product.id}
                        product={product}
                        onAddToCartClicked={() => addToCart(product.id)}/>))}
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
    }
})

ProductList.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number.isRequired, title: PropTypes.string.isRequired, price: PropTypes.number.isRequired, inventory: PropTypes.number.isRequired}),).isRequired,
    addToCart: PropTypes.func.isRequired
}

export default connect(state => ({
    products: getVisibleProducts(state.products)
}), {
    addToCart
},)(ProductList)
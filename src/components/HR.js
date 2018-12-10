import React, { Component } from 'react';
import { View } from 'react-native';

class HR extends Component {
    render() {
        return (
            <View style={[styles.lineStyle, this.props.lineStyle]}></View>
        )
    }
}

const styles = {
    lineStyle: {
        flexDirection: 'row', 
        alignItems: 'center', 
        height: 1,
        borderWidth: 1,
        borderColor: '#e6e6e6',
        backgroundColor: '#e6e6e6'
    }
};

export default HR ;

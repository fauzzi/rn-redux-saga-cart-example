import React from 'react';
import {StyleSheet, Text} from 'react-native';

const Label = ({
    children,
    style,
    ...props
}) => {
    style = StyleSheet.flatten(style);
    return (
        <Text
            style={[
            {
                backgroundColor: 'transparent',
                fontSize: 16,
                color: '#444444',
                lineHeight: parseInt(1.3 * ((!!style && style.fontSize) || 16), 10)
            },
            style
        ]}
            {...props}>
            {children}
        </Text>
    );
};

export default Label;

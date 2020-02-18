import React from 'react'
import { View, StyleSheet } from 'react-native'

const CircleShape = props => {
    return (
        <View {...props} style={{ ...styles.circle, ...props.style }}>
        </View>
    );
}

const styles = StyleSheet.create({
    circle: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        backgroundColor: 'red',
        borderWidth:0,
        borderColor:'#fff'
    }
})

export default CircleShape;
import React from 'react'
import { View, StyleSheet } from 'react-native'

const CrossShape = props => {
    return (
        <View {...props} style={{ ...styles.cross, ...props.style }}>
            <View style={styles.crossUp} />
            <View style={styles.crossFlat} />
        </View>);
}

const styles = StyleSheet.create({
    cross: {
        width:50,
        height:50
    },
    crossUp: {
        backgroundColor: 'red',
        height: 100,
        width: 20
    },
    crossFlat: {
        backgroundColor: 'red',
        height: 20,
        width: 100,
        position: 'absolute',
        left: -40,
        top: 40
    }
})

export default CrossShape;
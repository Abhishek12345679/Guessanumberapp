import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Circle from '../components/CircleShape'

const NumberContainer = props => {
    return (
        <Circle style={styles.numbercontainer}>
            <Text style={styles.number}>{props.children}</Text>
        </Circle>
    );
};

const styles = StyleSheet.create({
    numbercontainer: {
        width: 200,
        height: 200,
        backgroundColor: "#000",
        justifyContent: "center",
        alignItems: 'center'
    },
    number: {
        fontSize:35,
        color:'#fff',
        textAlign:'center'
    }
});

export default NumberContainer;

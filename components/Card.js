import React from "react";
import { View, StyleSheet } from "react-native";

const Card = props => {
return (<View style={{...styles.card, ...props.style}}>{props.children}</View>);
};

const styles = StyleSheet.create({
    card:{
        alignItems: 'center',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.6,
        shadowOffset: { width: 0, height: 6 }
    }
})

export default Card;
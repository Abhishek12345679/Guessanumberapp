import React from "react";
import { StyleSheet, TextInput } from "react-native";

const Input = props => {
    return (
        <TextInput {...props} style={{ ...styles.textInput, ...props.style }} />
    );
};

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderColor: "white",
        color: "white",
        textAlign: "center",
        opacity:0.75
    }
});

export default Input;

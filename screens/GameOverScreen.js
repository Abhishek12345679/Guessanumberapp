import React from "react";
import { View, Text, StyleSheet } from "react-native";

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>K.O.</Text>
        </View>);
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 5,
        justifyContent: 'center',
        alignItems: "center"
    }
});

export default GameOverScreen;

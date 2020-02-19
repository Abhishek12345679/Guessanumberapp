import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>K.O.</Text>
            <Text>The Machine took {props.rounds} trys</Text>
            <Text>Hooman gave {props.userNumber} to guess</Text>
            <Button title="Restart" onPress={props.onRestart} />
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

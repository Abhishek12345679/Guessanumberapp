import React from "react";
import { View, Text, StyleSheet, Button, Image, TouchableOpacity } from "react-native";

import BodyText from '../components/BodyText'
import TitleText from '../components/TitleText'
import Card from "../components/Card";

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <TitleText style={{ fontSize: 50 }}>K.O.</TitleText>
            <View style={styles.imageContainer}>
                <Image
                    // source={require('../assets/success.png')}
                    source={{ uri: 'https://cdn.pixabay.com/photo/2020/02/15/09/09/sky-4850411_960_720.jpg' }}
                    style={styles.image}
                    fadeDuration={2000} />
            </View>
            <BodyText style={{ fontSize: 17, textAlign: 'center' }}>
                The Machine took <Text style={styles.highlightedText}>{props.rounds}</Text> trys to guess <Text style={styles.highlightedText}>{props.userNumber}</Text>
            </BodyText>

            <TouchableOpacity onPress={props.onRestart} style={styles.restartButtonContainer}>
                <Card style={styles.restartCard}>
                    <BodyText style={styles.buttontext}>Restart</BodyText>
                </Card>
            </TouchableOpacity>

        </View>);
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 40,
        justifyContent: 'center',
        alignItems: "center"
    },
    image: {
        width: '100%',
        height: '100%'
    },
    imageContainer: {
        width: 300,
        height: 300,
        overflow: 'hidden',
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'orange',
        marginVertical: 20
    },
    restartButtonContainer: {
        margin: 15
    },
    restartCard: {
        width: 150,
        height: 50,
        shadowColor: 'orange'
    },
    buttontext: {
        color: '#fff',
        fontSize: 17
    },
    highlightedText: {
        fontFamily:'open-sans-bold',
        color:'orange'
    }
});

export default GameOverScreen;

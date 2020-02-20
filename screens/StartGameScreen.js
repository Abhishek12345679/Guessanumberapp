import React, { useState } from "react";

import {
    View,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    Keyboard,
    Dimensions,
    Alert,
    TouchableOpacity,
} from "react-native";

import Card from '../components/Card'
import Colors from '../constants/Colors'
import Input from '../components/Input'
import CircleShape from '../components/CircleShape'

import BodyText from '../components/BodyText'
import TitleText from '../components/TitleText'

const StartGameScreen = props => {

    const [enteredValue, setEnteredValue] = useState('')
    const [selectedNumber, setSelectedNumber] = useState()
    const [confirmed, setConfirmed] = useState(false);

    //validates the non valid inputs in the inputText
    const changeTextHandler = inputText => {
        //replaces any character other than 0-9 with a blank
        setEnteredValue(inputText.replace(/[^0-9]/g, ''))
    }

    const resetInputHandler = () => {
        setEnteredValue('');
        Keyboard.dismiss()
        setConfirmed(false)
    }

    const confirmInputHandler = () => {

        const chosenNumber = parseInt(enteredValue);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid String!', "Enter a number between 0 and 99",
                [{ text: "Okay", style: "default", onPress: resetInputHandler },
                { text: 'Cancel', style: 'destructive', onPress: resetInputHandler }])
            return;
        }

        setConfirmed(true);
        setSelectedNumber(chosenNumber)
        setEnteredValue('')
        Keyboard.dismiss()
    }

    let confirmedOutput;

    if (confirmed) {
        // confirmedOutput = <Text> You Chose : {selectedNumber} </Text>
        confirmedOutput = (
            <Card style={styles.circleShapeView}>
                <Text style={styles.selectedNumber}>{selectedNumber}</Text>
                <TouchableOpacity
                    activeOpacity={0.26}
                    style={styles.TriangleShapeView}
                    onPress={() => props.onStartGame(selectedNumber)}>
                </TouchableOpacity>
            </Card>
        )
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss()
        }}>
            <View style={styles.screen}>
                <Card style={styles.gameArea}>
                    <Input
                        style={styles.textInput}
                        keyboardType="numeric"
                        maxLength={2}
                        onChangeText={changeTextHandler}
                        value={enteredValue}
                        placeholderTextColor="#000" />

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.confirmButton} onPress={resetInputHandler}>
                            <CircleShape style={styles.circle}>
                                <Text style={styles.buttonText}>x</Text>
                            </CircleShape>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cancelButton} onPress={confirmInputHandler}>
                            <CircleShape style={styles.circle}>
                                <Text style={styles.buttonText}>OK</Text>
                            </CircleShape>
                        </TouchableOpacity>
                    </View>
                </Card>
                {confirmedOutput}

            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    screen: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        alignItems: 'center'
    },
    confirmButton: {

    },
    cancelButton: {

    },
    gameArea: {
        marginTop: 5,
        width: '98%',
        height: 150,
        justifyContent: 'center',
        backgroundColor: Colors.lakerblack,
        shadowColor: '#000',
        borderRadius: 15,
        shadowRadius: 15
    },
    textInput: {
        width: '95%',
        height: 60,
        fontSize: 20,
        borderColor: '#fff',
        borderWidth: 0,
        borderRadius: 20,
        color: "#000",
        textAlign: 'left',
        paddingLeft: 25,
        backgroundColor: '#fff',
        marginTop: 0,
        fontFamily: 'open-sans'
    },
    buttonContainer: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10
    },
    button: {
        width: 100
    },
    gameAreaContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    circleShapeView: {
        //To make Circle Shape
        marginVertical: 15,
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
        backgroundColor: Colors.lakerblack,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.6,
        shadowOffset: { width: 4, height: 3 },
        shadowRadius: 5
    },
    TriangleShapeView: {
        //To make Triangle Shape
        width: 30,
        height: 0,
        borderLeftWidth: 50,
        borderRightWidth: 50,
        borderBottomWidth: 80,
        borderStyle: 'solid',
        backgroundColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: Colors.lakerpurple,
        transform: [
            { rotate: '90deg' }
        ],
        shadowColor: '#000',
        shadowOpacity: 0.6,
        shadowOffset: { width: 4, height: 3 },
        shadowRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        opacity: 0.9
    },
    selectedNumber: {
        color: '#fff',
        fontSize: 120,
        fontFamily: 'open-sans-bold'
    },
    circle: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    buttonText: {
        fontSize: 20,
        fontFamily: 'open-sans'
    }
});

export default StartGameScreen;
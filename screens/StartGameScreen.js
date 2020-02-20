import React, { useState } from "react";

import {
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    Keyboard,
    Dimensions,
    Alert,
    TouchableOpacity,
} from "react-native";

import {
    AntDesign,
    MaterialCommunityIcons
} from '@expo/vector-icons'

import Card from '../components/Card'
import Colors from '../constants/Colors'
import Input from '../components/Input'
import CircleShape from '../components/CircleShape'

import BodyText from '../components/BodyText'
import StartGameBtn from "../components/StartGameBtn";

const StartGameScreen = props => {

    const [enteredValue, setEnteredValue] = useState('')
    const [selectedNumber, setSelectedNumber] = useState()
    const [confirmed, setConfirmed] = useState(false);

    const { onStartGame } = props;

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
        confirmedOutput = (
            <StartGameBtn onPress={() => onStartGame(selectedNumber)} selectedNumber={selectedNumber} />
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
                                <MaterialCommunityIcons name="sword-cross" size={30} color="#FF0000" />
                            </CircleShape>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cancelButton} onPress={confirmInputHandler}>
                            <CircleShape style={styles.circle}>
                                <AntDesign name="heart" size={30} color="#008000" />
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
        width: '93%',
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
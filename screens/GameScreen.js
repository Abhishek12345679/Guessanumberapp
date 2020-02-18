import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Text, Button } from 'react-native'
import NumberContainer from '../components/NumberContainer'
import CircleShape from '../components/CircleShape'

const generateNumberBetween = (min, max, exclude) => {
    min = Math.ceil(min)
    max = Math.floor(max)

    const rndNumber = Math.floor(Math.random() * (max - min)) + min;

    if (rndNumber === exclude) {
        return generateNumberBetween(min, max, exclude)
    }
    else {
        return rndNumber
    }
}

const GameScreen = props => {
    const [currentGuess, setCurrentGuess] =
        useState(generateNumberBetween(1, 100, props.userChoice))

    return (
        <View style={styles.screen}>
            <View style={styles.mainContainer}>
                <TouchableOpacity style={styles.upButton}>
                    <CircleShape style={styles.circle}>
                        <Text style={{ color: '#000', fontWeight: 'bold' }}>UP</Text>
                    </CircleShape>
                </TouchableOpacity>
                <NumberContainer style={styles.numberContainer}>{currentGuess}</NumberContainer>
                <TouchableOpacity style={styles.downButton}>
                    <CircleShape style={styles.circle}>
                        <Text style={{ color: '#000', fontWeight: 'bold' }}>DOWN</Text>
                    </CircleShape>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 5,
        marginTop: 10
    },
    mainContainer: {
        flexDirection: 'column',
        flex: 1,
        marginVertical: 0,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    numberContainer: {
    },
    upButton: {

    },
    downButton: {

    },
    circle: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'white',
        borderWidth:1,
        borderColor:'#ccc'
    }
})

export default GameScreen;
import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
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
        <View>
            <View style={styles.mainContainer}>
                <TouchableOpacity style={styles.upButton}>
                    <CircleShape>
                        <Text>∧</Text>
                    </CircleShape>
                </TouchableOpacity>
                <NumberContainer>{currentGuess}</NumberContainer>
                <TouchableOpacity style={styles.downButton}>
                    <CircleShape>
                        <Text>∨</Text>
                    </CircleShape>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'column',
        flex: 1,
        marginVertical: 20,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    upButton: {

    },
    downButton: {

    }
})

export default GameScreen;
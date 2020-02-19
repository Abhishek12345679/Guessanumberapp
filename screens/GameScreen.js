import React, { useState, useRef, useEffect } from 'react'
import { View, StyleSheet, TouchableOpacity, Text, Alert } from 'react-native'
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


    const currentHigh = useRef(100);
    const currentLow = useRef(1);

    const [rounds, setRounds] = useState(0);

    const { userChoice, onGameOver } = props;

    useEffect(() => {
        if (currentGuess === props.userChoice) {
            onGameOver(rounds)
        }
    }, [userChoice, onGameOver, currentGuess]
    )


    const nextGuessHandler = direction => {
        if ((direction === 'greater' && currentGuess > props.userChoice) || (direction === 'lower' && currentGuess < props.userChoice)) {
            Alert.alert('Fraud Alert', 'Hint accordingly',
                [{ text: 'Cancel', style: 'cancel' }]);
            return;
        }
        if (direction === 'lower') {
            currentHigh.current = currentGuess;
        }
        else {
            currentLow.current = currentGuess;
        }

        const nextGuess = generateNumberBetween(currentLow.current, currentHigh.current, currentGuess)
        setCurrentGuess(nextGuess)
        setRounds(curRounds => curRounds + 1)
    }


    return (
        <View style={styles.screen}>
            <View style={styles.mainContainer}>
                <TouchableOpacity style={styles.upButton} onPress={nextGuessHandler.bind(this, 'greater')}>
                    <CircleShape style={styles.circle}>
                        <Text style={{ color: '#000', fontWeight: 'bold' }}>UP</Text>
                    </CircleShape>
                </TouchableOpacity>
                <NumberContainer style={styles.numberContainer}>{currentGuess}</NumberContainer>
                <TouchableOpacity style={styles.downButton} onPress={nextGuessHandler.bind(this, 'lower')}>
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
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#ccc'
    }
})

export default GameScreen;
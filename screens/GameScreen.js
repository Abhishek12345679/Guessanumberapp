import React, { useState, useRef, useEffect } from 'react'
import { View, StyleSheet, TouchableOpacity, Text, Alert, ScrollView, FlatList } from 'react-native'

import NumberContainer from '../components/NumberContainer'
import CircleShape from '../components/CircleShape'
import Card from '../components/Card'

import TitleText from '../components/TitleText'
import BodyText from '../components/BodyText'

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

const renderListItem = (itemData) => {
    return (
        <Card
            style={styles.listItem}>
            <BodyText style={styles.listItemTitle}>{itemData.item}</BodyText>
        </Card>)
}

const GameScreen = props => {
    const initialGuess = generateNumberBetween(1, 100, props.userChoice);
    const [currentGuess, setCurrentGuess] = useState(initialGuess)

    // const [rounds, setRounds] = useState(0);

    const [pastGuesses, setPastGuesses] = useState([initialGuess.toString()])

    const currentHigh = useRef(100);
    const currentLow = useRef(1);


    const { userChoice, onGameOver } = props;

    useEffect(() => {
        if (currentGuess === props.userChoice) {
            onGameOver(pastGuesses.length)
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
            currentLow.current = currentGuess + 1;
        }

        const nextGuess = generateNumberBetween(currentLow.current, currentHigh.current, currentGuess)
        setCurrentGuess(nextGuess)
        // setRounds(curRounds => curRounds + 1)

        setPastGuesses(curPastGuess => [nextGuess.toString(), ...pastGuesses])
    }


    return (
        <View style={styles.screen}>
            <View style={styles.mainContainer}>
                <View style={styles.playContainer}>
                    <TouchableOpacity style={styles.upButton} onPress={nextGuessHandler.bind(this, 'greater')}>
                        <CircleShape style={styles.circle}>
                            <TitleText style={{ color: '#000', fontWeight: 'bold' }}>UP</TitleText>
                        </CircleShape>
                    </TouchableOpacity>
                    <NumberContainer style={styles.numberContainer}>{currentGuess}</NumberContainer>
                    <TouchableOpacity style={styles.downButton} onPress={nextGuessHandler.bind(this, 'lower')}>
                        <CircleShape style={styles.circle}>
                            <TitleText style={{ color: '#000', fontWeight: 'bold' }}>DOWN</TitleText>
                        </CircleShape>
                    </TouchableOpacity>
                </View>

                {/* <ScrollView>
                        {pastGuesses.map(guess => renderListItem(guess))}
                    </ScrollView> */}

                <FlatList
                    contentContainerStyle={styles.listContainer}
                    keyExtractor={(item) => item}
                    data={pastGuesses}
                    renderItem={renderListItem} />

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
    playContainer: {
        flexDirection: 'column',
        marginVertical: 20,
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        marginStart: 40
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
    },
    listContainer: {
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        paddingVertical: 70,
        marginHorizontal: 22
    },
    mainContainer: {
        flexDirection: 'row',
        flex: 1
    },
    listItem: {
        width: 180,
        marginVertical: 5,
        borderRadius: 8,
        height: 50
    },
    listItemTitle: {
        fontSize: 18,
        color: "#fff"
    }

})

export default GameScreen;
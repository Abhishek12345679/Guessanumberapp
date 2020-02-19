import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font'
import { AppLoading } from 'expo'

import Header from './components/Header'
import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen'


const fetchFonts = () => {
  Font.loadAsync({
    'open-sans': require('./assets/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/OpenSans-Bold.ttf')
  })
}

export default function App() {

  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0)
  const [loaded, setLoaded] = useState(false)

  if (!loaded) {
    return <AppLoading
      startAsync={fetchFonts}
      onFinish={() => { setLoaded(true) }}
      onError={(err)=>{console.log(err)}} />
  }

  const configNewGame = () => {
    setGuessRounds(0)
    setUserNumber(null)
  }

  const startGameHandler = selectedNumber => {
    setUserNumber(selectedNumber);
    setGuessRounds(0)
  }

  const gameOverHandler = numofRounds => {
    setGuessRounds(numofRounds)
  }

  let screen = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber && guessRounds <= 0) {
    screen = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
  }
  else if (guessRounds > 0) {
    screen = <GameOverScreen rounds={guessRounds} userNumber={userNumber} onRestart={configNewGame} />
  }

  return (
    <View style={styles.screen}>
      <Header title="Guessie"></Header>
      {screen}
    </View>
  );




}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
});

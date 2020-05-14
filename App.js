import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/header';
import StartGameScreen from './screens/startGameScreen';

export default function App() {
  return (
    <View style={styles.container}>
     <Header title="Guess A Number"/>
     <StartGameScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

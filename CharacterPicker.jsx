import React, { useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import charactersData from './characters.json';
import CharacterCard from './CharacterCard';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    position: 'absolute',
    top: 5, 

  },
  button: {
    width: 160,
    padding: 0,
    borderWidth: 0,
    transform: [{ rotate: '5deg' }],
    transformOrigin: 'center',
    textDecorationLine: 'none',
    fontSize: 15,
    paddingBottom: 3,
    borderRadius: 5,
    shadowColor: '#D96745',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    backgroundColor: '#D96745',
    overflow: 'hidden',
  },
  buttonText: {
    backgroundColor: '#F7EDE2',
    display: 'flex',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#494a4b',
  },
  characterInfo: {
    marginTop: 20,
    alignItems: 'center',
  },
});

const CharacterPicker = () => {
  const [fontsLoaded] = useFonts({
    'DKCanoodle': require('./assets/fonts/DK-Canoodle.otf'),
    'Muli': require('./assets/fonts/Muli.ttf'),
    'PatrickHand': require('./assets/fonts/PatrickHand.ttf'),
    'FVAlmelo': require('./assets/fonts/FV_Almelo.ttf'),
    'Wilhelm': require('./assets/fonts/Wilhelm.ttf'),
  });

  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [buttonTextIndex, setButtonTextIndex] = useState(0);

  const buttonTexts = [
    'Choose a character',
    'Another one ?',
    'Not convinced ?',
    'Still haven\'t found one ?',
    'Is it our characters you don\'t like ???',
  ];

  const pickRandomCharacter = () => {
    const randomIndex = Math.floor(Math.random() * charactersData.length);
    const selected = charactersData[randomIndex];
    setSelectedCharacter(selected);

    // Change the button text to the next one in the array
    setButtonTextIndex((prevIndex) => (prevIndex + 1) % buttonTexts.length);
  };

  return (
    <View style={styles.container}>
      {fontsLoaded ? (
        <Text style={[styles.title, { fontFamily: 'DKCanoodle' }]}>Guess Who</Text>
      ) : (
        <Text>Loading fonts...</Text>
      )}
      <TouchableOpacity onPress={pickRandomCharacter} style={styles.button} activeOpacity={0.7}>
        <View style={styles.buttonText}>
          <Text>{buttonTexts[buttonTextIndex]}</Text>
        </View>
      </TouchableOpacity>
      {selectedCharacter && (
        <View style={styles.characterInfo}>
          <CharacterCard character={selectedCharacter} />
        </View>
      )}
    </View>
  );
};

export default CharacterPicker;
import React, { useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import charactersData from './characters.json';
import CharacterCard from './CharacterCard';
import Timer from './Timer';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginTop: 20,
  },
  title: {
    fontSize: 80,
    fontFamily: 'DKCanoodle',
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

const CharacterPicker = ({ fontsLoaded }) => {

  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [buttonTextIndex, setButtonTextIndex] = useState(0);

  const buttonTexts = [
    'Choose a character',
    'Another one ?',
    'Not convinced ?',
    'Still haven\'t found one ??',
    'Is it our characters you don\'t like !???',
  ];

  const pickRandomCharacter = () => {
    const randomIndex = Math.floor(Math.random() * charactersData.length);
    const selected = charactersData[randomIndex];
    setSelectedCharacter(selected);

    setButtonTextIndex((prevIndex) => (prevIndex + 1) % buttonTexts.length);
  };

  return (
    <View style={styles.container}>
        {fontsLoaded && (
        <Text style={styles.title}>Guess Who</Text>
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
          <Timer />
    </View>
  );
};

export default CharacterPicker;
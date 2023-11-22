import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import charactersData from './characters.json';
  
const styles = StyleSheet.create({
  cardContainer: {
    alignItems: 'center',
  },
  characterImageContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: 'hidden',
    marginBottom: 10,
  },
  characterImage: {
    width: '100%',
    height: '100%',
  },
  characterName: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  characterOccupation: {
    fontSize: 22,
    color: '#0E1B0E',
    fontFamily: 'PatrickHand',
  },
  characterDescription: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Muli',
  },
});

const CharacterCard = ({ character }) => {
  
  return (
    <View style={styles.cardContainer}>
      <View style={styles.characterImageContainer}>
        <ImageBackground
          source={{ uri: character.photo }}
          style={styles.characterImage}
        />
      </View>
      <Text style={styles.characterName}>{character.firstName}</Text>
      <Text style={styles.characterOccupation}>{character.occupation}</Text>
      <Text style={styles.characterDescription}>{character.description}</Text>
    </View>
  );
};

export default CharacterCard;

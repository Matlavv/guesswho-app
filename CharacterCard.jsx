import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Image } from 'react-native';
import charactersData from './characters.json';
import { Asset } from 'expo-asset';

import amelia from './assets/characterPicture/amelia.png';
import aisha from './assets/characterPicture/aisha.png';
import alexander from './assets/characterPicture/alexander.png';
import erika from './assets/characterPicture/erika.png';
import fred from './assets/characterPicture/fred.png';
import harper from './assets/characterPicture/harper.png';
import john from './assets/characterPicture/john.png';
import leila from './assets/characterPicture/leila.png';
import lydie from './assets/characterPicture/lydie.png';
import marcus from './assets/characterPicture/marcus.png';
import maya from './assets/characterPicture/maya.png';
import myriam from './assets/characterPicture/myriam.png';
import rai from './assets/characterPicture/rai.png';
import reena from './assets/characterPicture/reena.png';
import tom from './assets/characterPicture/tom.png';
import emily from './assets/characterPicture/emily.png';

const characterImages = [
  Asset.fromModule(amelia).uri,
  Asset.fromModule(reena).uri,
  Asset.fromModule(tom).uri,
  Asset.fromModule(leila).uri,
  Asset.fromModule(aisha).uri,
  Asset.fromModule(fred).uri,
  Asset.fromModule(marcus).uri,
  Asset.fromModule(john).uri,
  Asset.fromModule(rai).uri,
  Asset.fromModule(alexander).uri,
  Asset.fromModule(myriam).uri,
  Asset.fromModule(emily).uri,
  Asset.fromModule(harper).uri,
  Asset.fromModule(maya).uri,
  Asset.fromModule(lydie).uri,
  Asset.fromModule(erika).uri,
];

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
  characterImageBackground: {
    flex: 1,
    borderRadius: 100,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  characterImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  characterName: {
    fontSize: 30,
    marginBottom: 5,
    fontFamily: 'DKCanoodle',
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
  const imageCharacter = characterImages[character.id - 1]; 
  return (
    <View style={styles.cardContainer}>
      <View style={styles.characterImageContainer}>
        <Image
          source={{ uri: imageCharacter }}
          style={styles.characterImage}
          imageStyle={styles.characterImageBackground}
        />
      </View>
      <Text style={styles.characterName}>{character.firstName}</Text>
      <Text style={styles.characterOccupation}>{character.occupation}</Text>
      <Text style={styles.characterDescription}>{character.description}</Text>
    </View>
  );
};

export default CharacterCard;

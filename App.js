import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal } from 'react-native';
import CharacterPicker from './CharacterPicker';
import RulesScreen from './RulesScreen';
import { useFonts } from 'expo-font';

export default function App() {
  const [showRules, setShowRules] = useState(false);
  const [fontsLoaded] = useFonts({
    'DKCanoodle': require('./assets/fonts/DK-Canoodle.otf'),
    'Muli': require('./assets/fonts/Muli.ttf'),
    'PatrickHand': require('./assets/fonts/PatrickHand.ttf'),
    'FVAlmelo': require('./assets/fonts/FV_Almelo.ttf'),
    'Wilhelm': require('./assets/fonts/Wilhelm.ttf'),
  });

  const handleRulesClick = () => {
    setShowRules(true);
  };

  const handleCloseModal = () => {
    setShowRules(false);
  };

  return (
    <View style={styles.container}>
      <CharacterPicker />

      <TouchableOpacity onPress={handleRulesClick} style={styles.rulesContainer}>
        <Text style={styles.rulesText}>Find the rules</Text>
      </TouchableOpacity>

      {/* Modal to display the rules */}
      <Modal visible={showRules} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <RulesScreen />
          <TouchableOpacity onPress={handleCloseModal} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9B1B0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rulesContainer: {
    position: 'absolute',
    bottom: 20,
  },
  rulesText: {
    color: '#0E1B0E', 
    fontFamily: 'PatrickHand',
    fontSize: 20
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  closeButton: {
    marginTop: 600,
    padding: 10,
    backgroundColor: '#E9B1B0',
    borderRadius: 10,
  },
  closeButtonText: {
    color: '#0E1B0E',
  },
});

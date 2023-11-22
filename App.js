import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal } from 'react-native';
import { useFonts } from 'expo-font';
import CharacterPicker from './CharacterPicker';
import RulesScreen from './RulesScreen';

export default function App() {
  const [showRules, setShowRules] = useState(false);

  const handleRulesClick = () => {
    setShowRules(true);
  };

  const handleCloseModal = () => {
    setShowRules(false);
  };

  const [fontsLoaded] = useFonts({
    'DKCanoodle': require('./assets/fonts/dk-canoodle.ttf'),
    'Muli': require('./assets/fonts/Muli.ttf'),
    'PatrickHand': require('./assets/fonts/PatrickHand-Regular.ttf'),
    });

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
    fontSize: 16
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

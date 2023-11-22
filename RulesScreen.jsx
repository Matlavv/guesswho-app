// RulesScreen.jsx
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, ScrollView, StyleSheet } from 'react-native';

const RulesScreen = ({ showRules, setShowRules }) => {
  const rulesContent = `
    1. The player with the least battery on their phone starts.
    2. Players take turns askings questions about styles related to tech professions.
    3. Questions must be phrased to explicit "yes" or "no".
    4. The goal is to narrow down the list of possible professions based on the answers to the questions.
    5. Players can use the same board to eliminate professions by ruffins them or marking them in some other way.
    6. The first player who thinks they have identified their opponent's profession can have a guess instead of asking a question.
  `;

  return (
    <Modal visible={showRules} transparent animationType="slide">
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.rulesText}>{rulesContent}</Text>
        </ScrollView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end', 
    padding: 50,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  rulesText: {
    fontSize: 24,
    marginBottom: 20,
    color: '#F7EDE2',
    fontFamily: 'PatrickHand',
  },

});

export default RulesScreen;
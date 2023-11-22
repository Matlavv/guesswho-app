// RulesScreen.jsx
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, ScrollView, StyleSheet } from 'react-native';

const RulesScreen = ({ showRules, setShowRules }) => {
  const rulesContent = `
    1. The player with the least battery on their phone starts.
    2. Players 
    3. Questions
    4. The goal
    5. Players
    6. The first
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
    padding: 40,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  rulesText: {
    fontSize: 24,
    marginBottom: 20,
    color: '#F7EDE2',
    fontFamily: 'PatrickHand',
  },

});

export default RulesScreen;

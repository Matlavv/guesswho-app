import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Timer = () => {
  const [seconds, setSeconds] = useState(30);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && seconds > 0) {
      timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, seconds]);

  const handleStart = () => {
    setSeconds(30);
    setIsRunning(true);
  };

  const handleReset = () => {
    setSeconds(30);
    setIsRunning(false);
  };

  return (
    <View style={styles.timerContainer}>
      <TouchableOpacity onPress={handleStart} style={styles.timerButton1}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
      <Text style={styles.timerText}>{seconds}s</Text>
      <TouchableOpacity onPress={handleReset} style={styles.timerButton2}>
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  timerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  timerButton1: {
    padding: 0,
    transform: [{ rotate: '-5deg' }],
    transformOrigin: 'center',
    textDecorationLine: 'none',
    paddingBottom: 3,
    shadowColor: '#D96745',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    overflow: 'hidden',
  },
  timerButton2: {
    padding: 0,
    transform: [{ rotate: '10deg' }],
    transformOrigin: 'center',
    textDecorationLine: 'none',
    paddingBottom: 3,
    shadowColor: '#D96745',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
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
  timerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
});

export default Timer;

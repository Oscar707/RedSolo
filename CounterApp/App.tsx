import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';

export default function App() {
  const [count, setCount] = useState<number>(0);

  const increment = (): void => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = (): void => {
    setCount(prevCount => prevCount - 1);
  };

  const reset = (): void => {
    setCount(0);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Counter App</Text>
        
        <View style={styles.counterContainer}>
          <Text style={styles.counterText}>{count}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={[styles.button, styles.decrementButton]} 
            onPress={decrement}
            activeOpacity={0.7}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.button, styles.resetButton]} 
            onPress={reset}
            activeOpacity={0.7}
          >
            <Text style={styles.resetButtonText}>Reset</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.button, styles.incrementButton]} 
            onPress={increment}
            activeOpacity={0.7}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>
            {count === 0 ? 'Start counting!' : 
             count > 0 ? `Positive: ${count}` : 
             `Negative: ${Math.abs(count)}`}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 50,
    textAlign: 'center',
  },
  counterContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 40,
    marginBottom: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    minWidth: 200,
    alignItems: 'center',
  },
  counterText: {
    fontSize: 72,
    fontWeight: 'bold',
    color: '#2196F3',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    maxWidth: 350,
    marginBottom: 30,
  },
  button: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  incrementButton: {
    backgroundColor: '#4CAF50',
  },
  decrementButton: {
    backgroundColor: '#f44336',
  },
  resetButton: {
    backgroundColor: '#FF9800',
    width: 100,
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
  },
  resetButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  infoContainer: {
    backgroundColor: '#e3f2fd',
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 25,
    marginTop: 20,
  },
  infoText: {
    fontSize: 18,
    color: '#1976d2',
    textAlign: 'center',
    fontWeight: '500',
  },
});
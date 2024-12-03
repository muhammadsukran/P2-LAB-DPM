import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.boxContainer}>
        <View style={styles.boxLeft} />
        <Text style={styles.text}>Mhd.Sukran</Text>
        <View style={styles.boxRight} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#d3d3d3', 
  },
  boxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 24,
    color: 'blue',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  boxLeft: {
    width: 100,
    height: 100,
    backgroundColor: 'yellow', 
  },
  boxRight: {
    width: 100,
    height: 100,
    backgroundColor: 'brown', 
  },
});

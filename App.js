import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { bold } from 'ansi-colors';

export default function App() {
  return (
    <View style={styles.container}>
      <Text> Cainan Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

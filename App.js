import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import Loading from './components/Loading';
import LoginPage from './components/LoginPage';

export default function App() {
  return (
    <View style={styles.container}>
      <LoginPage />
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

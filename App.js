import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PostMainComponent from './src/postMainComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <PostMainComponent/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#040404',
    height:"100%"
  },
});

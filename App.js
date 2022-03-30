import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PostMainComponent from "./src/postMainComponent";
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from "react-native-safe-area-context";
import NavigationService from './src/navigation';

export default function App() {
  return (
    <NavigationContainer ref={navigationRef => NavigationService.setTopLevelNavigator(navigationRef)}>
    <SafeAreaProvider>
      <View style={styles.container}>
        <PostMainComponent />
      </View>
    </SafeAreaProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#040404",
    height: "100%",
  },
});

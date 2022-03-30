import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PostMainComponent from "./src/postMainComponent";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import NavigationService from "./src/navigation";

export default function App() {
  return (
    <NavigationContainer
      ref={(navigationRef) =>
        NavigationService.setTopLevelNavigator(navigationRef)
      }
    >
      <SafeAreaProvider>
        <SafeAreaView style={{backgroundColor:"#252525"}}>
          <View style={styles.container}>
            <PostMainComponent />
          </View>
        </SafeAreaView>
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

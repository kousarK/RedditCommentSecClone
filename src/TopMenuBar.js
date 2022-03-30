import { StyleSheet, Text, View } from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const TopMenuBar = () => {
  return (
    <View
      style={{
        backgroundColor: "#252525",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 5,
      }}
    >
      <View style={{ flex: 4 }}>
        <FontAwesome
          name="arrow-left"
          style={{ color: "white", fontSize: 26, fontWeight: "900" }}
        />
      </View>
      <View
        style={{
          flex: 2,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <FontAwesome
          name="bell-o"
          style={{ color: "white", fontSize: 24, fontWeight: "900" }}
        />
        <Text style={styles.textStyle}>...</Text>
        <Text style={styles.textStyle}>Dp</Text>
      </View>
    </View>
  );
};

export default TopMenuBar;

const styles = StyleSheet.create({
  textStyle: {
    color: "white",
    fontSize: 20,
    alignSelf: "center",
    textAlign: "center",
  },
});

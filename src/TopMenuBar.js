import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";

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
        <Ionicons
          name="ios-arrow-back-outline"
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
        <View style={{ flexDirection: "row" }}>
          <View style={styles.dotStyle}></View>
          <View style={styles.dotStyle}></View>
          <View style={styles.dotStyle}></View>
        </View>
        <Image
          source={require("@expo/../../assets/dpb.png")}
          style={{ width: 35, height: 35, borderRadius: 50 }}
        ></Image>
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
  },
  dotStyle: {
    width: 4,
    height: 4,
    borderRadius: 50,
    backgroundColor: "white",
    alignSelf: "center",
    margin: 2,
  },
});

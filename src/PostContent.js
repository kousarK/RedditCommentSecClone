import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";

const PostContent = () => {
  return (
    <View style={{ backgroundColor: "#252525" }}>
      <View
        style={{
          flexDirection: "row",
          alignContent: "center",
          alignContent: "center",
          padding: 10,
        }}
      >
        <Image
          source={require("@expo/../../assets/dp.png")}
          style={{ width: 35, height: 35, borderRadius: 50 }}
        ></Image>

        <View style={{ paddingLeft: 10 }}>
          <Text style={{ color: "#8f9091", fontWeight: "500" }}>
            r/AskReddit
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: "#77b5f4" }}>u/CityVirtual4704</Text>
            <View
              style={{
                width: 2,
                height: 2,
                borderRadius: 50,
                backgroundColor: "#8f9091",
                alignSelf: "center",
                margin: 5,
              }}
            ></View>
            <Text style={{ color: "#8f9091" }}>106d</Text>
          </View>
        </View>
      </View>
      <View style={{ padding: 10, paddingRight: 30 }}>
        <Text style={{ color: "white", fontSize: 18, fontWeight: "600" }}>
          What is the funniest comedy movie you've ever seen?
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 5,
          paddingHorizontal: 10,
        }}
      >
        <View style={[styles.statsInduvidualRow, { flex: 3 }]}>
          <Entypo name="arrow-up" style={styles.iconStyle} />
          <Text style={styles.statsRowText}>41.6K</Text>
          <Entypo name="arrow-down" style={styles.iconStyle} />
        </View>
        <View style={[styles.statsInduvidualRow, { flex: 3 }]}>
          <Entypo name="message" style={styles.iconStyle} />
          <Text style={styles.statsRowText}>21.2K</Text>
        </View>
        <View style={[styles.statsInduvidualRow, { flex: 3 }]}>
          <Entypo name="upload" style={styles.iconStyle} />
          <Text style={styles.statsRowText}>Share</Text>
        </View>
        <View style={[styles.statsInduvidualRow, { flex: 1 }]}>
          <Ionicons name="gift" style={styles.iconStyle} />
        </View>
      </View>
    </View>
  );
};

export default PostContent;

const styles = StyleSheet.create({
  statsInduvidualRow: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
  },
  iconStyle: {
    color: "#8f9091",
    fontSize: 20,
    fontWeight: "900",
  },
  statsRowText: {
    color: "#8f9091",
    padding: 5,
  },
});

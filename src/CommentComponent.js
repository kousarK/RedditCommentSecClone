import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";

const CommentComponent = ({ subcoment = false, commentDetails = {} }) => {
  function kFormatter(num) {
    return Math.abs(num) > 999
      ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "K"
      : Math.sign(num) * Math.abs(num);
  }

  return (
    <View style={{ backgroundColor: "#252525", marginVertical: 5 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          alignContent: "center",
          padding: 10,
        }}
      >
        <Image
          source={require("@expo/../../assets/dp.png")}
          style={{ width: 25, height: 25, borderRadius: 50 }}
        ></Image>

        <View style={{ paddingLeft: 10, alignItems: "center" }}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: "#8f9091", fontWeight: "600", fontSize: 12 }}>
              {commentDetails.postedBy}
            </Text>
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
            <Text style={{ color: "#8f9091", fontSize: 12 }}>106d</Text>
          </View>
        </View>
      </View>
      <View style={{ paddingHorizontal: 10, paddingBottom: 10 }}>
        <Text style={{ color: "white" }}>{commentDetails.body}</Text>
      </View>
      <View
        style={{
          padding: 5,
          paddingRight: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <View style={{ flex: 7 }}></View>
        <View style={{ flexDirection: "row", flex: 1 }}>
          <View style={styles.dotStyle}></View>
          <View style={styles.dotStyle}></View>
          <View style={styles.dotStyle}></View>
        </View>
        <Ionicons name="gift" style={[styles.iconStyle, { flex: 1 }]} />
        <View style={[styles.statsInduvidualRow]}>
          <Entypo name="reply" style={styles.iconStyle} />
          <Text style={styles.statsRowText}>Reply</Text>
        </View>
        <View style={[styles.statsInduvidualRow]}>
          <Entypo name="arrow-up" style={styles.iconStyle} />
          <Text style={styles.statsRowText}>{kFormatter(commentDetails.upvoteCount)}</Text>
          <Entypo name="arrow-down" style={styles.iconStyle} />
        </View>
      </View>
      {subcoment ? (
        <View
          style={{
            marginLeft: 10,
            paddingLeft: 5,
            borderLeftColor: "#8f9091",
            borderLeftWidth: 0.2,
          }}
        >
          <CommentComponent />
        </View>
      ) : null}
    </View>
  );
};

export default CommentComponent;

const styles = StyleSheet.create({
  dotStyle: {
    width: 2,
    height: 2,
    borderRadius: 50,
    backgroundColor: "#8f9091",
    alignSelf: "center",
    margin: 1,
  },
  iconStyle: {
    color: "#8f9091",
    fontSize: 16,
    fontWeight: "900",
  },
  statsInduvidualRow: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    flex: 3,
    justifyContent: "center",
  },
  statsRowText: {
    padding: 2,
    fontSize: 12,
    color: "#8f9091",
  },
});

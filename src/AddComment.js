import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

const AddComment = () => {
  return (
    <View
      style={{
        position: "absolute",
        bottom: 0,
        backgroundColor: "#252525",
        width: "100%",
        paddingTop: 10,
      }}
    >
      <View
        style={{
          backgroundColor: 'rgba(52, 52, 52, 0.5)',
          padding: 5,
          borderRadius: 5,
          margin: 5,
          marginBottom: 10,
        }}
      >
        <TextInput placeholder="Add a comment"  placeholderTextColor="#FFF" style={{color:"white",padding:5}} />
      </View>
      <View
        style={{
          borderBottomColor: "#525659",
          borderBottomWidth: 0.5,
          width: "100%",
        }}
      ></View>
    </View>
  );
};

export default AddComment;

const styles = StyleSheet.create({});

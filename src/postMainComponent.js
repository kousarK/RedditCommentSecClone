import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import TopMenuBar from "./TopMenuBar";
import AddComment from "./AddComment";

const PostMainComponent = () => {
  return (
    <View style={{height:"100%"}}>
      <TopMenuBar />
      <ScrollView>
        <View style={{backgroundColor:"#252525"}}>
          <Text style={{ color: "white" }}>sdfsdf</Text>

          <Text style={{ color: "white" }}>sdfsdf</Text>
          <Text style={{ color: "white" }}>sdfsdf</Text>

          <Text style={{ color: "white" }}>sdfsdf</Text>
          <Text style={{ color: "white" }}>sdfsdf</Text>
          <Text style={{ color: "white" }}>sdfsdf</Text>
        </View>
      </ScrollView>
      <AddComment/>
    </View>
  );
};

export default PostMainComponent;

const styles = StyleSheet.create({
  textStyle: {
    color: "white",
  },
});

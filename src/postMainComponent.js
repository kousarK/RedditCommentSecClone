import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import TopMenuBar from "./TopMenuBar";
import AddComment from "./AddComment";
import PostContent from "./PostContent";
import Entypo from "react-native-vector-icons/Entypo";
import CommentComponent from "./CommentComponent";

const PostMainComponent = () => {
  return (
    <View style={{ height: "100%" }}>
      <TopMenuBar />
      <ScrollView>
        <PostContent />
        {/* comment sorting */}
        <TouchableOpacity
          style={{
            flexDirection: "row",
            padding: 5,
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Entypo name="rocket" style={{ color: "#8f9091", fontSize: 16 }} />
          <Text style={styles.textStyle}>BEST COMMENTS</Text>
          <Entypo name="chevron-down" style={{ color: "#8f9091", fontSize: 16 }} />
        </TouchableOpacity>
        {/* comment sorting */}
        <CommentComponent/>
        <CommentComponent subcoment={true}/>
        <CommentComponent/>
        <CommentComponent/>

      </ScrollView>
      <AddComment />
    </View>
  );
};

export default PostMainComponent;

const styles = StyleSheet.create({
  textStyle: {
    color: "#8f9091",
    paddingHorizontal: 2,
    fontSize:10
  },
});

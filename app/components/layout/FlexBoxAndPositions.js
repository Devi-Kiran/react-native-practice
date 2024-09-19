import React from "react";
import { View, StyleSheet } from "react-native";
import ComponentTitle from "../customComponents/ComponentTitle";

function FlexBoxAndPositions() {
  return (
    <>
      {/* <ComponentTitle title="flexbox" /> */}
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
      <View style={styles.box4}></View>
    </>
  );
}

export default FlexBoxAndPositions;

const styles = StyleSheet.create({
  box1: {
    backgroundColor: "red",
    width: 100,
    height: 100,
    // height: 400,
    // flexBasis: 10, //controls width and height based on flex-direction
    // alignSelf: "flex-start",
  },
  box2: {
    backgroundColor: "blue",
    width: 100,
    height: 100,
    position: "relative", //by default
    top: 10,
    right: 20
    // height: 300,
    // flexBasis: 10, //controls width and height based on flex-direction
    // alignSelf: "center",
  },
  box3: {
    backgroundColor: "red",
    width: 100,
    height: 100,
    position: "absolute",
    //it does not stretch when we set 0 for all direction
    // top: 0,
    bottom: 0,
    right:0,
    // left: 0

    // height: 200,
    // flexBasis: 10, //controls width and height based on flex-direction
    // alignSelf: "flex-end",
  },
  box4: {
    backgroundColor: "blue",
    width: 100,
    height: 100,
    // flexBasis: 10, //controls width and height based on flex-direction
    // alignSelf: "flex-end",
  },
});

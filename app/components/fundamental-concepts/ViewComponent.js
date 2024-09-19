import React from "react";
import { View, StyleSheet } from "react-native";
import ComponentTitle from "../customComponents/ComponentTitle";
function ViewComponent() {
  return (
    <View>
      <ComponentTitle title="view" />

      <View
        style={{
          flexDirection: "row",
          height: 100,
          padding: 20,
          justifyContent: "space-between",
          marginBottom: 30,
        }}
      >
        <View
          style={{ width: 100, height: 100, backgroundColor: "red" }}
        ></View>
        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: "black",
          }}
        ></View>
      </View>
    </View>
  );
}

export default ViewComponent;

const styles = StyleSheet.create({
  flexContainer: {
    flexDirection: "row",
    height: 100,
    padding: 20,
    justifyContent: "space-between",
    marginBottom: 30,
  },
});

import React from "react";
import { View, StyleSheet } from "react-native";

function StyleSheetApi() {
  return (
    <View>
      {/* Object on the right overwrights the left object poprties */}
      <View style={styles.box1}></View>
      <View
        style={[
          styles.box1,
          { backgroundColor: "pink" },
          { backgroundColor: "blue" },
        ]}
      ></View>
    </View>
  );
}

export default StyleSheetApi;

// StyleSheet.create validates property immidiatly if we miss spell
// recommended
const styles = StyleSheet.create({
  box1: {
    width: 100,
    height: 100,
    backgroundColor: "tomato",
  },
});

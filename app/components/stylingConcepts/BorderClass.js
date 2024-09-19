import React from "react";
import { View } from "react-native";

function BorderClass() {
  return (
    <View
      style={{
        width: 100,
        height: 100,
        backgroundColor: "tomato",
        marginHorizontal: "auto",
        marginTop: 50,
        //////////
        borderColor: "dodgerblue",
        borderWidth: 10,
        borderTopWidth: 20,
        // borderTopLeftRadius: 30,
        // borderTopEndRadius: 5,
        borderRadius: 50,
        borderBlockEndColor: "tomato"
      }}
    ></View>
  );
}

export default BorderClass;

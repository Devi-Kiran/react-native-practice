import React from "react";
import { View } from "react-native";

function PaddingsAndMargins() {
  return (
    <>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "tomato",
          marginHorizontal: "auto",
          marginTop: 50,
          marginBottom: 10,
          paddingStart: 20, //paddingEnd
          paddingTop: 20,
        }}
      >
        <View
          style={{
            width: 50,
            height: 50,
            backgroundColor: "dodgerblue",
          }}
        />
      </View>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "tomato",
          marginHorizontal: "auto",
          paddingStart: 20, //paddingEnd
          paddingTop: 20,
        }}
      />
    </>
  );
}

export default PaddingsAndMargins;

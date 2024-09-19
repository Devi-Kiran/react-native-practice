import React from "react";
import { View } from "react-native";

function ShadowsClass() {
  return (
    <View
      style={{
        width: 100,
        height: 100,
        backgroundColor: "tomato",
        marginHorizontal: "auto",
        marginTop: 50,
        ////for IOS////
        // shadowColor: "tomato",
        // shadowOffset: {width: 10,  height: 20},
        // shadowOpacity: 1,
        // shadowRadius: 10,

        ///////////
        elevation: 10, ///for androind

      }}
    />
  );
}

export default ShadowsClass;

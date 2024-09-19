import React from "react";
import { Text, Platform } from "react-native";

function StylingTextClass() {
  return (
    <Text style={{
        textAlign: "center",
        fontWeight: "900", //bold
        textTransform: "uppercase",
        fontFamily: Platform.OS === "android" ? "Roboto" : "Courier",
        fontSize: 20,
        lineHeight: 40,
        fontStyle: "italic",
        color: "tomato",
        textDecorationLine: "underline line-through"

    }}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </Text>
  );
}

export default StylingTextClass;


////////there is no inheritance styles like websites
////ex: this properties only supports to text component only

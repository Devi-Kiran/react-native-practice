import React from "react";
import { View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import colors from "../../config/colors";

function Icon({
  name,
  color = "white",
  size = 45,
  backgroundColor = "black",
  circle = true,
  style,
}) {
  return (
    <View
      style={[
        {
          width: Number(size),
          height: Number(size),
          backgroundColor,
          borderRadius: circle ? Number(size) / 2 : 5,
          justifyContent: "center",
          alignItems: "center",
        },
        style,
      ]}
    >
      <MaterialCommunityIcons name={name} size={size / 2} color={color} />
    </View>
  );
}

export default Icon;

import React from "react";
import { View, Text } from "react-native";
import ComponentTitle from "../customComponents/ComponentTitle";
import { useDeviceOrientation } from "@react-native-community/hooks";

function DetectingOrientatrionChanges() {
  const deviceOrientation = useDeviceOrientation();
  return (
    <View>
      <ComponentTitle title="detection of orientaion changer" />
      <View
        style={{
          width: "100%",
          height: deviceOrientation == "portrait" ? "30%" : "100%",
          backgroundColor: "dodgerblue",
        }}
      >
        <Text style={{ color: "white" }}>Rotate</Text>
      </View>
    </View>
  );
}

export default DetectingOrientatrionChanges;
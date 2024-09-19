import React from "react";
import { View, Text } from "react-native";
import ComponentTitle from "../customComponents/ComponentTitle";
function TextComponent() {
  return (
    <View>
      <ComponentTitle title="text" />
      <Text className="text-red-500" numberOfLines={1} onPress={() => console.log("hello world")}>
        Jalsa Telugu Movie Full Songs || Jukebox || Pawan Kalyan, TrivikramJalsa
        Telugu Movie Full Songs || Jukebox || Pawan Kalyan, Trivikram
      </Text>
    </View>
  );
}

export default TextComponent;

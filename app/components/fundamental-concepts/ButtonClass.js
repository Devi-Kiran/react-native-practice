import React from "react";
import { Button, View } from "react-native";
import ComponentTitle from "../customComponents/ComponentTitle";

function ButtonClass() {
  return (
    <View>
      <ComponentTitle title="buttons" />
      <Button
        title="Click Here"
        color="gold"
        // disabled
        accessibilityLabel="button for upload"
        onPress={() => alert("button clicked")}
      />
    </View>
  );
}

export default ButtonClass;

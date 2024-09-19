import React from "react";
import {
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
} from "react-native";
import ComponentTitle from "../customComponents/ComponentTitle";

function Touchables() {
  return (
    <View>
      <ComponentTitle title="Touchable" />
      <TouchableHighlight onPress={() => alert("image clicked")}>
        <Image
          source={{
            uri: "https://images.pexels.com/photos/27367865/pexels-photo-27367865/free-photo-of-mount-everest.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            width: "100%",
            height: 200,
          }}
        />
      </TouchableHighlight>
      <TouchableOpacity onPress={() => alert("image clicked")}>
        <Image
          source={{
            uri: "https://images.pexels.com/photos/27367865/pexels-photo-27367865/free-photo-of-mount-everest.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            width: 200,
            height: 200,
          }}
        />
      </TouchableOpacity>
      <TouchableWithoutFeedback onPress={() => alert("image clicked")}>
        <Image
          source={{
            uri: "https://images.pexels.com/photos/27367865/pexels-photo-27367865/free-photo-of-mount-everest.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            width: 200,
            height: 200,
          }}
        />
      </TouchableWithoutFeedback>
      <TouchableNativeFeedback onPress={() => alert("image clicked")}>
        <View
          style={{ width: 100, height: 100, backgroundColor: "red" }}
        ></View>
      </TouchableNativeFeedback>
    </View>
  );
}

export default Touchables;

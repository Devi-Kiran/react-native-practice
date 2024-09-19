import React from "react";
import { View, Image } from "react-native";
import ComponentTitle from "../customComponents/ComponentTitle";
function ImageComponent() {
  return (
    <View>
      <ComponentTitle title="images" />
      {/* require method returns number when we pass path*/}
      {/* for local images */}
      <Image
        style={{ width: 50, height: 50 }}
        source={require("../../assets/icon.png")}
      />
      {/* for network images */}
      <Image
        // style={{objectFit: "contain"}}
        // blurRadius={10}
        // fadeDuration={1000} //only work in androind
        resizeMode="cover"
        source={{
          uri: "https://images.pexels.com/photos/27367865/pexels-photo-27367865/free-photo-of-mount-everest.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          width: 200,
          height: 200,
        }}
      />
    </View>
  );
}

export default ImageComponent;

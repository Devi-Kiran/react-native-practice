import React, { useState, useEffect } from "react";
import { View, Dimensions } from "react-native";
import ComponentTitle from "../customComponents/ComponentTitle";

function DymensionsApi() {
  // console.log(Dimensions.get("window"));
  // console.log(Dimensions.get("screen"));
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const updateLayout = () => {
      const screenWidth = Dimensions.get("window").width;
      setIsLargeScreen(screenWidth > 768);
    };

    Dimensions.addEventListener("change", updateLayout);

    // Initial check
    updateLayout();

    // return () => Dimensions.removeEventListener("change", updateLayout);
  }, []);
  return (
    <View>
      <ComponentTitle title="dymensions" />
      <View
        style={{
          backgroundColor: isLargeScreen ? "red" : "blue",
          width: "50%",
          height: 70,
        }}
      ></View>
    </View>
  );
}

export default DymensionsApi;

// its does not responsive to oriantation changes

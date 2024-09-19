import React, { useEffect } from "react";
import { Text, Platform, StyleSheet } from "react-native";

function PlatformSpecificCode() {
  useEffect(() => {
    console.log(
      Platform.select({
        ios: {
          fontSize: 20,
          fontFamily: "Avenir",
          color: "tomoto",
        },
        android: {
          fontSize: 18,
          fontFamily: "Roboto",
          color: "dodgerblue",
        },
      })
    );
  }, []);
  return <Text style={styles.appText}>platform specific code</Text>;
}

const styles = StyleSheet.create({
  appText: {
    textTransform: "capitalize",
    ...Platform.select({
      ios: {
        fontSize: 20,
        fontFamily: "Avenir",
        color: "tomoto",
      },
      android: {
        fontSize: 18,
        fontFamily: "Roboto",
        color: "dodgerblue",
      },
    }),
  },
});

export default PlatformSpecificCode;

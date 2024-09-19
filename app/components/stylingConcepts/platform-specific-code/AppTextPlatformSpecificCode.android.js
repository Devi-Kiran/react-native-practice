import React from "react";
import { Text, StyleSheet } from "react-native";

function AppTextPlatformSpecificCode() {
  return <Text style={styles.appText}>platform specific code</Text>;
}

const styles = StyleSheet.create({
  appText: {
    textTransform: "capitalize",
    fontSize: 18,
    fontFamily: "Roboto",
    color: "dodgerblue",
  },
});

export default AppTextPlatformSpecificCode;

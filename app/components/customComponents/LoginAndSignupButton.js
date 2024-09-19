import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

import colors from "../../config/colors";

function LoginAndSignupButton({ buttonText, style, buttonColor = "primary", onPress }) {
  return (
    <TouchableOpacity
      style={[styles.loginAndSignupButton, { backgroundColor: colors[buttonColor] }, style]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText]}>{buttonText}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  loginAndSignupButton: {
    backgroundColor: "red",
    padding: 12,
    borderRadius: 5,
    borderRadius: 50,
    textAlign: "center",
    marginVertical: 5,
    // width: "100%"
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
    textTransform: "uppercase",
    color: colors.white,
    fontSize: 18,
  },
});

export default LoginAndSignupButton;

import React from "react";
import { View, StyleSheet, ImageBackground, Image, Text } from "react-native";

import LoginAndSignupButton from "../components/customComponents/LoginAndSignupButton";
import colors from "../config/colors";

function WelcomeScreen() {
  return (
    <ImageBackground
      style={styles.background}
      blurRadius={3}
      source={{
        uri: "https://images.pexels.com/photos/6204562/pexels-photo-6204562.jpeg?auto=compress&cs=tinysrgb&w=600",
      }}
    >
      <View style={[styles.logoContainer]}>
        <Image
          style={{ borderRadius: 20, marginBottom: 4 }}
          source={{
            width: 100,
            height: 100,
            uri: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png",
          }}
        />
        <Text style={{ color: colors.primary, fontWeight: "600", fontSize: 20 }}>
          Starbucks Furnitures
        </Text>
      </View>
      <View style={[styles.buttonsContainer]}>
        <LoginAndSignupButton
          buttonText="login"
          onPress={() => alert("login")}
        />
        <LoginAndSignupButton
          buttonText="sign up"
          buttonColor="secondary"
          onPress={() => alert("sign up")}
        />
      </View>
    </ImageBackground>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },

  logoContainer: {
    alignItems: "center",
    position: "absolute",
    top: 100,
    width: "100%",
  },
  buttonsContainer: {
    padding: 5,
  },
});

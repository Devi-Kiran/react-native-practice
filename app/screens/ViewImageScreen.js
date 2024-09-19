import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Entypo from "@expo/vector-icons/Entypo";

function ViewImageScreen() {
  return (
    <View style={[styles.screenContainer]}>
      <TouchableOpacity style={{ position: "absolute", top: 20, right: 20 }}>
        <FontAwesome name="trash" size={35} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={{ position: "absolute", top: 20, left: 20 }}>
        <Entypo name="squared-cross" size={35} color="white" />
      </TouchableOpacity>

      <Image
        resizeMode="contain"
        source={{
          width: "100%",
          height: 650,
          uri: "https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg?auto=compress&cs=tinysrgb&w=600",
        }}
      />
    </View>
  );
}

export default ViewImageScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "black",
  },
});

import React from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ListItemDeleteAction = ({ onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color="white"
          style={styles.icon}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    width: 70,
    justifyContent: "center",
    alignItems: "center",
    flex: 0.2,
  },
  icon: {
    fontSize: 30,
    color: "white",
  },
});

export default ListItemDeleteAction;

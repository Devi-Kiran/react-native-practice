import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Icon from "./Icon";
import AppText from "./AppText";
import colors from "../../config/colors";

function CategoryPickerItem({ option, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon style={styles.icon} name={option?.icon} backgroundColor={option.backgroundColor} size={80}/>
      <AppText style={styles.text}>{option?.label}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: "auto",
    paddingVertical: 10,
    paddingHorizontal: 25,
    alignItems: "center",
    width: "33%"
    // borderColor: "black",
    // borderWidth: 2,
  },
  icon: {
    marginBottom: 5
  },
  text: {
    color: colors.darkGrey,
    textAlign: "center"
  }
});

export default CategoryPickerItem;

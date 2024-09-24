import React from "react";
import { TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import colors from "../config/colors";

const NewListingButton = ({ onPress }) => {
  return (
    <TouchableOpacity
      style={{
        width: 70,
        height: 70,
        backgroundColor: colors.primary,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 35,
        borderWidth: 7,
        borderColor: colors.white,
        bottom: 25,
      }}
      onPress={onPress}
    >
      <MaterialCommunityIcons
        name="plus-circle"
        size={40}
        color={colors.white}
      />
    </TouchableOpacity>
  );
};

export default NewListingButton;

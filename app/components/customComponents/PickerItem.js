import React from "react";
import { TouchableHighlight, Text } from "react-native";

import AppText from "./AppText";
import colors from "../../config/colors";

function PickerItem({ option, onPress }) {
  return (
    <TouchableHighlight
      style={{ marginVertical: 5 }}
      onPress={onPress}
      underlayColor={colors.lightGrey}
    >
      <AppText style={{ paddingVertical: 10, paddingHorizontal: 5 }}>{option.label}</AppText>
    </TouchableHighlight>
  );
}

export default PickerItem;

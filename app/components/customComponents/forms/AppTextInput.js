import React, { useState } from "react";
import { TextInput, View, StyleSheet } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import defaultStyles from "../../../config/defaultStyles";

function AppTextInput({ iconName, style, width = "100%", ...otherProps }) {
  const [message, setMessage] = useState("");

  return (
    <View style={[styles.container, style, {width}]}>
      {iconName && (
        <MaterialCommunityIcons
          name={iconName}
          size={24}
          color={defaultStyles.colors.lightGrey}
          style={styles.icon}
        />
      )}

      <TextInput
        style={[defaultStyles.text, styles.input]}
        placeholderTextColor={defaultStyles.colors.placeholder}
        onChangeText={(text) => setMessage(text)}
        value={message}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: defaultStyles.colors.cream,
    marginVertical: 10,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
  },
});

export default AppTextInput;

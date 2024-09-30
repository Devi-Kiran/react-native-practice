import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import AppText from "./AppText";
import colors from "../../config/colors";

function Post({ title, userId, body, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <AppText style={{ marginBottom: 10 }}>USer ID: {userId}</AppText>
      <AppText style={{ marginBottom: 10 }}>{title}</AppText>
      <AppText numberOfLines={3}>{body}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    backgroundColor: colors.white,
    padding: 10,
    borderRadius: 10,
  },
});

export default Post;

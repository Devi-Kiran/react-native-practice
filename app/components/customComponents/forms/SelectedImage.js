import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

function SelectedImage({ uri, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        style={styles.image}
        source={{ uri: uri, width: 100, height: 100 }}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  image: { borderRadius: 15, marginRight: 10 },
});

export default SelectedImage;

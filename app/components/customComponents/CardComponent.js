import React from "react";
import { Text, View, StyleSheet, TouchableWithoutFeedback, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
// import { Image } from "react-native-expo-image-cache";

import AppText from "./AppText";
import colors from "../../config/colors";

function CardComponent({ id, images, title, subTitle, onPress }) {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() =>
        navigation.navigate("ListingDetailsScreen", {
          id,
          images,
          title,
          subTitle,
        })
      }
    >
      <View style={styles.cardContainer}>
        <View>
          {/* for cachimg images purpose */}
          {/* <Image
            resizeMode="cover"
            preview={{ uri: images[0] }} ///use thumbnail
            uri={images[0]}
            style={{width: "100%", height: 250}}
            tint="light"
            fadeDuration={1000}     
          /> */}

          <Image
            fadeDuration={1000}
            resizeMode="cover"
            source={{
              uri: images[0],
              width: "100%",
              height: 250,
            }}
          />
        </View>
        <View style={styles.aboutContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 15,
    overflow: "hidden",
    backgroundColor: colors.white,
    marginBottom: 20,
  },
  aboutContainer: {
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  title: {
    fontWeight: "600",
    marginBottom: 10,
  },
  subTitle: {
    color: colors.primary,
    fontSize: 18,
    fontStyle: "italic",
    fontWeight: "600",
  },
});

export default CardComponent;

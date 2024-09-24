import React from "react";
import {
  Image,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

import AppText from "./AppText";
import colors from "../../config/colors";

function CardComponent({ id, image, title, subTitle, onPress }) {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() =>
        navigation.navigate("ListingDetailsScreen", {
          id,
          image,
          title,
          subTitle,
        })
      }
    >
      <View style={styles.cardContainer}>
        <View>
          <Image
            fadeDuration={1000}
            resizeMode="cover"
            source={{
              uri: image,
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

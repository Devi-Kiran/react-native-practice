import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";

import Screen from "../components/customComponents/Screen";
import AppText from "../components/customComponents/AppText";
import ListItem from "../components/customComponents/ListItem";
import colors from "../config/colors";

function ListingDetailsScreen({ route }) {
  const { id, image, title, subTitle } = route.params;

  return (
    // <Screen style={{ backgroundColor: colors.cream }}>
    <View style={{flex: 1}}>
      <View style={styles.screenContainer}>
        <Image
          fadeDuration={1000}
          resizeMode="cover"
          source={{
            uri: image,
            width: "100%",
            height: 300,
          }}
        />

        <View style={styles.aboutContainer}>
          <AppText style={styles.productName}>{title}</AppText>
          <Text style={styles.productPrice}>{subTitle}</Text>
        </View>

        <ListItem
          image="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600"
          title="john bosco"
          subTitle={5}
          style={{ marginVertical: 40 }}
        />
      </View>
      </View>
    // </Screen>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  aboutContainer: {
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  productName: {
    fontWeight: "600",
    marginBottom: 10,
  },
  productPrice: {
    color: colors.primary,
    fontSize: 18,
    fontStyle: "italic",
    fontWeight: "600",
  },
});

export default ListingDetailsScreen;

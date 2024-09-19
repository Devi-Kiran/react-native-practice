import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";

import Screen from "../components/customComponents/Screen";
import AppText from "../components/customComponents/AppText";
import ListItem from "../components/customComponents/ListItem";
import colors from "../config/colors";

function ListingDetailsScreen() {
  return (
    <Screen style={{ backgroundColor: colors.cream }}>
      <View style={styles.screenContainer}>
        <Image
          fadeDuration={1000}
          resizeMode="cover"
          source={{
            uri: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            width: "100%",
            height: 300,
          }}
        />

        <View style={styles.aboutContainer}>
          <AppText style={styles.productName}>
            Two Assorted-color Padded Chairs
          </AppText>
          <Text style={styles.productPrice}>6999 /-</Text>
        </View>

        <ListItem
          image="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600"
          title="john bosco"
          subTitle={5}
          style={{ marginVertical: 40 }}
        />
      </View>
    </Screen>
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

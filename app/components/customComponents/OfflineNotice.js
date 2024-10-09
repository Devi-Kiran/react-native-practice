import React from "react";
import { View, StyleSheet, Text, Platform } from "react-native";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";
import colors from "../../config/colors";

function OfflineNotice() {
  const netInfo = useNetInfo();

  // console.log(netInfo)

  if (netInfo.type !== null && netInfo.isInternetReachable === false) {
    return (
      <View style={styles.container}>
        <Text
          style={{
            textAlign: "center",
            color: colors.white,
            fontWeight: "bold",
          }}
        >
          No Internet Connection
        </Text>
      </View>
    );
  }

  return null;
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    backgroundColor: "red",
    paddingVertical: 10,
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 3
  },
});

export default OfflineNotice;

import React from "react";
import { Image, View, StyleSheet, TouchableHighlight } from "react-native";
import Swipable from "react-native-gesture-handler/Swipeable";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import AppText from "./AppText";
import colors from "../../config/colors";

function ListItem({
  image,
  IconComponent,
  title,
  subTitle,
  style,
  onPress,
  renderRightActions,
}) {
  if (renderRightActions) {
    return (
      <GestureHandlerRootView>
        <Swipable renderRightActions={renderRightActions}>
          <TouchableHighlight
            underlayColor={colors.lightGrey}
            onPress={onPress}
          >
            <View style={[styles.listItemContainer, style]}>
              {IconComponent}
              {image && (
                <Image
                  resizeMode="cover"
                  style={styles.image}
                  source={{ uri: image, width: 70, height: 70 }}
                />
              )}

              <View style={{ marginLeft: 10, justifyContent: "center", flex: 1 }}>
                <AppText style={{ marginBottom: 5, fontWeight: "700" }} numberOfLines={1}>
                  {title}
                </AppText>
                {subTitle && (
                  <AppText style={{ color: colors.secondary }} numberOfLines={2}>
                    {subTitle}
                  </AppText>
                )}
              </View>
              <MaterialCommunityIcons
                name="chevron-right"
                size={25}
                color={colors.lightGrey}
              />
            </View>
          </TouchableHighlight>
        </Swipable>
      </GestureHandlerRootView>
    );
  } else {
    return (
      <TouchableHighlight underlayColor={colors.lightGrey} onPress={onPress}>
        <View style={[styles.listItemContainer, style]}>
          {IconComponent}
          {image && (
            <Image
              resizeMode="cover"
              style={styles.image}
              source={{ uri: image, width: 70, height: 70 }}
            />
          )}

          <View style={{ marginLeft: 10, justifyContent: "center" }}>
            <AppText style={{ marginBottom: 5, fontWeight: "700" }}>
              {title}
            </AppText>
            {subTitle && (
              <AppText style={{ color: colors.secondary }}>{subTitle}</AppText>
            )}
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  listItemContainer: {
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 20,
    backgroundColor: "white",
    alignItems: "center",
  },
  image: {
    borderRadius: 50,
  },
});

export default ListItem;

import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Modal,
  TouchableWithoutFeedback,
  Button,
  FlatList,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import Screen from "../Screen";
import defaultStyles from "../../../config/defaultStyles";
import AppText from "../AppText";
import PickerItem from "../PickerItem";

function AppPicker({ iconName, placeholder, options }) {
  const [selectedOption, setSelectedOption] = useState({});
  const [isOpenModel, setIsOpenModel] = useState(false);

  const handleOptionSelect = (option) => {
    setIsOpenModel(false);
    setSelectedOption(option);
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setIsOpenModel((prev) => !prev)}>
        <View style={styles.container}>
          {iconName && (
            <MaterialCommunityIcons
              name={iconName}
              size={24}
              color={defaultStyles.colors.lightGrey}
              style={styles.icon}
            />
          )}

          {/* <AppText style={styles.input}>{placeholder}</AppText> */}
          <AppText style={styles.input}>
            {Object.keys(selectedOption).length === 0
              ? placeholder
              : selectedOption.label}
          </AppText>

          <MaterialCommunityIcons
            name={"chevron-down"}
            size={24}
            color={defaultStyles.colors.lightGrey}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={isOpenModel} animationType="slide">
        <Screen style={{ paddingHorizontal: 15 }}>
          <Button
            title="close"
            onPress={() => setIsOpenModel((prev) => !prev)}
          />
          <FlatList
            data={options}
            keyExtractor={(item) => item.label}
            renderItem={({ item }) => (
              <PickerItem
                option={item.label}
                onPress={() => handleOptionSelect(item)}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
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
    color: defaultStyles.colors.darkGrey,
  },
});

export default AppPicker;

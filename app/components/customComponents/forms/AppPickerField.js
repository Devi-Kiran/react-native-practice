import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Modal,
  TouchableWithoutFeedback,
  Button,
  FlatList,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import ErrorMessage from "./ErrorMessage";
import { useFormikContext } from "formik";

import Screen from "../Screen";
import defaultStyles from "../../../config/defaultStyles";
import AppText from "../AppText";
import PickerItem from "../PickerItem";

function AppPickerField({
  iconName,
  placeholder,
  PickerItemComponent = PickerItem,
  numberOfColumns = 1,
  options,
  fieldName,
  width = "100%",
}) {
  const { values, setFieldValue, touched, errors } = useFormikContext();
  const [isOpenModel, setIsOpenModel] = useState(false);

  const handleOptionSelect = (option) => {
    setIsOpenModel(false);
    setFieldValue(fieldName, option);
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setIsOpenModel((prev) => !prev)}>
        <View style={[styles.container, { width }]}>
          {iconName && (
            <MaterialCommunityIcons
              name={iconName}
              size={24}
              color={defaultStyles.colors.lightGrey}
              style={styles.icon}
            />
          )}

          {values.category ? (
            <AppText style={styles.input}>{values.category.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}

          {/* <AppText style={styles.input}>
           
            {values.category ? values.category.labelm : placeholder}
          </AppText> */}

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
            numColumns={numberOfColumns}
            keyExtractor={(item) => item.label}
            renderItem={({ item }) => (
              <PickerItemComponent
                option={item}
                onPress={() => handleOptionSelect(item)}
              />
            )}
          />
        </Screen>
      </Modal>
      <ErrorMessage error={errors[fieldName]} visible={touched[fieldName]} />
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
    color: defaultStyles.colors.p,
  },
  placeholder: {
    flex: 1,
    color: defaultStyles.colors.placeholder,
  },
});

export default AppPickerField;
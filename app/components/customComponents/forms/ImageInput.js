import React, { useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Alert,
  ScrollView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { useFormikContext } from "formik";

import defaultStyles from "../../../config/defaultStyles";
import ErrorMessage from "./ErrorMessage";
import SelectedImage from "./SelectedImage";
import Icon from "../Icon";

function ImageInput({ fieldName }) {
  const scrollView = useRef();
  const { values, setFieldValue, touched, errors } = useFormikContext();

  const requestPermission = async () => {
    // const {granted} = Permissions.askAsync(Permissions.CAMERA, Permissions.NOTIFICATIONS);
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      alert("You need to give permission to upload images");
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);

  const imageUploadHandler = async () => {
    try {
      const { canceled, assets } = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!canceled) {
        setFieldValue(fieldName, [...values.images, assets[0].uri]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const imageDeleteHandler = (uri) => {
    Alert.alert("Delete", "Are you sure you want to delete this image?", [
      {
        text: "Yes",
        onPress: () => {
          setFieldValue(
            fieldName,
            values?.images?.filter((imageUri) => imageUri !== uri)
          );
        },
      },
      {
        text: "No",
      },
    ]);
  };

  return (
    <>
      <View style={styles.imagesContainer}>
        <ScrollView
          ref={scrollView}
          horizontal
          showsHorizontalScrollIndicator={false}
          onContentSizeChange={() => scrollView.current.scrollToEnd()}
        >
          <View style={{ flexDirection: "row" }}>
            {values.images.map((image) => (
              <SelectedImage
                key={image}
                uri={image}
                onPress={() => imageDeleteHandler(image)}
              />
            ))}
            {!(values.images.length === 5) && (
              <TouchableOpacity
                style={styles.uploadButton}
                onPress={imageUploadHandler}
              >
                <Icon
                  name={"camera"}
                  size={100}
                  color="grey"
                  backgroundColor={defaultStyles.colors.cream}
                  circle={false}
                />
              </TouchableOpacity>
            )}
          </View>
        </ScrollView>
      </View>

      <ErrorMessage error={errors[fieldName]} visible={touched[fieldName]} />
    </>
  );
}

const styles = StyleSheet.create({
  imagesContainer: {
    flexDirection: "row",
    flexWrap: "nowrap",
  },
  uploadButton: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ImageInput;

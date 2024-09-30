import React, { useState } from "react";
import { StyleSheet } from "react-native";

import Screen from "../components/customComponents/Screen";
import {
  AppForm,
  SubmitButton,
  AppFormField,
} from "../components/customComponents/forms";
import postsApi from "../api/posts";
import { number, object, string } from "yup";

import UploadScreen from "./UploadScreen";

const validationSchema = object({
  userId: number().required().min(1).max(1000).label("User ID"),
  title: string().required().max(50).label("Title"),
  body: string().required().min(10).max(200).label("Body"),
});

function AddPostScreen() {
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const getProgress = (progress) => {
    setProgress(progress);
  };

  const handleSubmit = async (post, {resetForm}) => {
    setProgress(0)
    setUploadVisible(true);
    const result = await postsApi.AddPost(
      {
        post,
        id: Math.floor(Math.random() * 1000),
      },
      getProgress
    );

    if (!result.ok) {
      alert("Not Uploaded");
      setUploadVisible(false)
    }

    resetForm();
  };

  return (
    <Screen style={styles.container}>
      <UploadScreen onUploadFinish={() => setUploadVisible(false)} visible={uploadVisible} progress={progress}/>
      <AppForm
        initialValues={{ userId: "", title: "", body: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <AppFormField
          fieldName="userId"
          placeholder="User Id"
          keyboardType="number-pad"
        />
        <AppFormField fieldName="title" placeholder="Title" />
        <AppFormField fieldName="body" placeholder="body" />
        <SubmitButton buttonText={"Submit"} />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
});

export default AddPostScreen;

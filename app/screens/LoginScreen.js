import React from "react";
import { Image, StyleSheet } from "react-native";
import { object, string } from "yup"; // * as Yup

import Screen from "../components/customComponents/Screen";

import {
  AppForm,
  AppFormField,
  SubmitButton,
} from "../components/customComponents/forms";

const validationSchema = object({
  email: string().required().email().label("Email"),
  password: string().required().min(4).max(10).label("Password"),
});

function LoginScreen() {
  return (
    <Screen style={{ padding: 20 }}>
      <Image
        style={styles.logo}
        source={{
          width: 100,
          height: 100,
          uri: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png",
        }}
      />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          iconName={"email"}
          placeholder="Email"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          textContentType="emailAddress" //ISO
          fieldName={"email"}
        />
        <AppFormField
          iconName={"key"}
          placeholder="Password"
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="password" //ISO
          fieldName={"password"}
        />
        <SubmitButton buttonText="Login" style={{ marginTop: 40 }} />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  logo: {
    alignSelf: "center",
    marginVertical: 100,
  },
});

export default LoginScreen;

import React from "react";
import {
  AppForm,
  AppFormField,
  SubmitButton,
} from "../components/customComponents/forms";
import { object, string } from "yup";

import Screen from "../components/customComponents/Screen";

const validationSchema = object({
  name: string().required().min(1).max(30),
  email: string().email().required(),
  password: string().required().min(8).max(25),
});

function RegisterScreen() {
  return (
    <Screen style={{ padding: 20 }}>
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          placeholder="Name"
          fieldName={"name"}
          iconName={"account"}
          maxLength={25}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <AppFormField
          placeholder="Email"
          fieldName={"email"}
          iconName={"email"}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="emailAddress"
        />
        <AppFormField
          placeholder="Password"
          fieldName={"password"}
          iconName={"key"}
          maxLength={25}
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="password"
        />
        <SubmitButton buttonText={"register"} style={{ marginTop: 40 }} />
      </AppForm>
    </Screen>
  );
}

export default RegisterScreen;

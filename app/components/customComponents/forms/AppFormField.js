import React from "react";
import { useFormikContext } from "formik";

import AppTextInput from "./AppTextInput";
import ErrorMessage from "./ErrorMessage";

function AppFormField({ fieldName, ...otherProps }) {
  const { values, handleChange, setFieldTouched, touched, errors } =
    useFormikContext();
  return (
    <>
      <AppTextInput
        // iconName={"email"}
        // placeholder="Email"
        // autoCapitalize="none"
        // autoCorrect={false}
        // keyboardType="email-address"
        // textContentType="emailAddress"
        {...otherProps}
        value={values[fieldName]}
        onChangeText={handleChange(fieldName)}
        onBlur={() => setFieldTouched(fieldName)}
      />
      <ErrorMessage error={errors[fieldName]} visible={touched[fieldName]} />
    </>
  );
}

export default AppFormField;

import React from "react";
import { useFormikContext } from "formik";

import LoginAndSignupButton from "../LoginAndSignupButton";

function SubmitButton({buttonText, style}) {
  const { handleSubmit } = useFormikContext();
  return (
    <LoginAndSignupButton
      style={style}
      buttonText={buttonText}
      onPress={handleSubmit}
    />
  );
}

export default SubmitButton;

import React from "react";
import { View, Button, Alert } from "react-native";
import ComponentTitle from "../customComponents/ComponentTitle";
function AlertApi() {
  return (
    <View>
      <ComponentTitle title="Alert API"/>
      {/* Alert is an API not component */}
      <Button
        title="Custom Alert"
        onPress={() =>
          Alert.alert("Message", "Button is clicked", [
            { text: "Yes", onPress: () => console.log("Yes") },
            { text: "No", onPress: () => console.log("No") },
          ])
        }
      />
      {/* Alert Prompt */}
      {/* works only in ISO */}
      <Button
        title="Works in IOS"
        onPress={() =>
          Alert.prompt("Alert prompt", "Button is clicked", (text) =>
            console.log(text)
          )
        }
      />
      {/* default alert */}
      <Button
        title="Default alert"
        color="gold"
        // disabled
        accessibilityLabel="button for upload"
        onPress={() => alert("button clicked")}
      />
    </View>
  );
}

export default AlertApi;

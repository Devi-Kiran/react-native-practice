import React, { useState } from "react";
import { Switch } from "react-native";

function AppSwitch() {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <Switch
      style={{ margin: 20 }}
      //   trackColor={{false: 'blue', true: 'red'}}
      // thumbColor={isEnabled ? 'green' : 'black'}
      value={isEnabled}
      onValueChange={() => setIsEnabled((prev) => !prev)}
    />
  );
}

export default AppSwitch;

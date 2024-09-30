import React from "react";
import { StyleSheet, Modal } from "react-native";
import * as Progress from "react-native-progress";
import LottieView from "lottie-react-native";

import Screen from "../components/customComponents/Screen";
import AppText from "../components/customComponents/AppText";
import colors from "../config/colors";

function UploadScreen({ progress = 0, visible = false, onUploadFinish }) {
  return (
    <Modal visible={visible} animationType="slide">
      <Screen style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar
            progress={progress}
            width={200}
            color={colors.primary}
          />
        ) : (
          <LottieView
            source={require("../assets/animations/done1.json")}
            loop={false}
            onAnimationFinish={onUploadFinish}
            autoPlay
            style={{width: 150, height: 150}}
          />
        )}
      </Screen>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default UploadScreen;

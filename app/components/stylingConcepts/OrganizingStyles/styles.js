import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
    appText: {
      textTransform: "Capitalize",
      fontSize: 25,
      color: "Tomato",
      fontFamily: Platform.OS === "android" ? "Roboto" : ""
}})

export default styles;
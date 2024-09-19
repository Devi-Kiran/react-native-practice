import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet, View, Platform, StatusBar, Text } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import Touchables from "./app/components/fundamental-concepts/Touchables";
import AlertApi from "./app/components/fundamental-concepts/AlertApi";
import ViewComponent from "./app/components/fundamental-concepts/ViewComponent";
import ButtonClass from "./app/components/fundamental-concepts/ButtonClass";
import ImageComponent from "./app/components/fundamental-concepts/ImageComponent";
import TextComponent from "./app/components/fundamental-concepts/TextComponent";
import StyleSheetApi from "./app/components/fundamental-concepts/StyleSheetApi";
import DetectingOrientatrionChanges from "./app/components/layout/DetectingOrientatrionChanges";
import DymensionsApi from "./app/components/layout/DymensionsApi";
import FlexBoxAndPositions from "./app/components/layout/FlexBoxAndPositions";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import BorderClass from "./app/components/stylingConcepts/BorderClass";
import ShadowsClass from "./app/components/stylingConcepts/ShadowsClass";
import PaddingsAndMargins from "./app/components/stylingConcepts/PaddingsAndMargins";
import StylingTextClass from "./app/components/stylingConcepts/StylingTextClass";
import AppText from "./app/components/customComponents/AppText";
import PlatformSpecificCode from "./app/components/stylingConcepts/platform-specific-code/PlatformSpecificCode";
import AppTextPlatformSpecificCode from "./app/components/stylingConcepts/platform-specific-code/AppTextPlatformSpecificCode";
import OrganizingStyles from "./app/components/stylingConcepts/OrganizingStyles";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/customComponents/Screen";
import ListItem from "./app/components/customComponents/ListItem";
import Icon from "./app/components/customComponents/Icon";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppTextInput from "./app/components/customComponents/forms/AppTextInput";
import AppSwitch from "./app/components/customComponents/forms/AppSwitch";
import AppPicker from "./app/components/customComponents/forms/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import RegisterScreen from "./app/screens/RegisterScreen";

export default function App() {
  return (
    <View style={styles.container}>
      {/* Forms concepts */}
      {/* <RegisterScreen /> */}
      <ListingEditScreen />
      {/* <LoginScreen /> */}

      {/* Input components */}
      {/* <AppPicker iconName={"apps"} placeholder="Category"/>
      <AppTextInput
        placeholder="First name"
        iconName={"email"}
        inputMode="text"
      />
      <AppTextInput placeholder="Otp" keyboardType="number-pad" />
      <AppSwitch /> */}

      {/* Lists concepts */}
      {/* <ListingsScreen /> */}
      {/* <AccountScreen/> */}
      {/* <Screen>
        <ListItem
          title="my title"
          // subTitle={"hello 2"}
          IconComponent={<Icon name="email" size="50" />}
        />
      </Screen> */}
      {/* <MessagesScreen /> */}

      {/* Styling concepts */}
      {/* <ListingDetailsScreen /> */}
      {/* <OrganizingStyles /> */}
      {/* <AppTextPlatformSpecificCode /> */}
      {/* <PlatformSpecificCode /> */}
      {/* <MaterialCommunityIcons
        name="email-outline"
        size={35}
        color="dodgerblue"
      /> */}
      {/* <AppText>Encapsulating Styles</AppText> */}
      {/* <StylingTextClass /> */}
      {/* <PaddingsAndMargins /> */}
      {/* <ShadowsClass /> */}
      {/* <BorderClass /> */}

      {/* Layout concepts */}
      {/* <WelcomeScreen /> */}
      {/* <ViewImageScreen /> */}
      {/* <View style={[styles.flexContainer, { height: "100%" }]}>
        <FlexBoxAndPositions />
      </View> */}

      {/* <DetectingOrientatrionChanges /> */}
      {/* <DymensionsApi /> */}

      {/* Fundamnetal concepts */}
      {/* <StyleSheetApi />
      <TextComponent />
      <ImageComponent />
      <ButtonComponent />
      <AlertApi />
      <ViewComponent />
      <Touchables /> */}

      <ExpoStatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: Platform.OS === "android" && StatusBar.currentHeight,
  },
  flexContainer: {
    // flex: 1,
    // height: "100%", //we can use this instead of flex: 1
    backgroundColor: "dodgerblue",
    flexDirection: "row",
    alignItems: "center", // baseline __
    // alignContent: "space-evenly",
    // flexWrap: "wrap", // should use alignContent intead of alignItems
    justifyContent: "center",
  },
});

// expo start -c

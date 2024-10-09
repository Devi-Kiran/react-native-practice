import react, { useEffect } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet, View, Platform, StatusBar, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
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
import NativagationConcepts from "./app/components/advanced-concepts/NativagationConcepts";
import colors from "./app/config/colors";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigation from "./app/navigation/AppNavigation";
import OfflineNotice from "./app/components/customComponents/OfflineNotice";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const storeData = async () => {
    try {
      await AsyncStorage.setItem("person", JSON.stringify({ id: 1 }));
      const result = await AsyncStorage.getItem("person");
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  // storeData();

  const FeedNavigator = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="ListingsScreen" component={ListingsScreen} />
        <Stack.Screen
          name="ListingDetailsScreen"
          component={ListingDetailsScreen}
        />
      </Stack.Navigator>
    );
  };

  const TabNavigator = () => {
    return (
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: colors.primary,
          labelStyle: {
            fontSize: 15,
            textAlign: "center",
          },
        }}
      >
        <Tab.Screen
          name="Home"
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" size={size} color={color} />
            ),
          }}
          component={FeedNavigator}
        />
        <Tab.Screen
          name="EditListing"
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="plus-circle"
                size={size}
                color={color}
              />
            ),
          }}
          component={ListingEditScreen}
        />
        <Tab.Screen
          name="Account"
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account"
                size={size}
                color={color}
              />
            ),
          }}
          component={AccountScreen}
        />
      </Tab.Navigator>
    );
  };

  return (
    <View style={styles.container}>
      <OfflineNotice />

      <NavigationContainer theme={navigationTheme}>
        <AppNavigation />
        {/* <AuthNavigator/>  */}
      </NavigationContainer>

      {/* <NavigationContainer>
        <TabNavigator />
      </NavigationContainer> */}
      {/* Navigation concepts */}
      {/* <NativagationConcepts /> */}

      {/* Forms concepts */}
      {/* <RegisterScreen /> */}
      {/* <ListingEditScreen /> */}
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
// json-server --watch db.json --port 3001

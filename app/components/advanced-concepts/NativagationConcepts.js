import React from "react";
import { Button, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  NavigationContainer,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

import Screen from "../customComponents/Screen";

function LinkComponent() {
  const navigation = useNavigation();
  return (
    <Button
      title="Goto Tweets"
      onPress={() => navigation.navigate("Tweets", { id: "1" })}
    />
  );
}

function ProfileComponent() {
  const route = useRoute();
  return <Text>ID: {route.params.id}</Text>;
}

function HomeScreen() {
  return (
    <Screen>
      <Text>Home</Text>
      <LinkComponent />
    </Screen>
  );
}

function TweetsScreen({ navigation }) {
  return (
    <Screen>
      <Text>Tweets</Text>
      <ProfileComponent />
      <Button
        title="tweet details"
        onPress={() => navigation.navigate("TweetDetails", { id: 1 })}
      />
    </Screen>
  );
}

function AccountScreen() {
  return (
    <Screen>
      <Text>Account</Text>
    </Screen>
  );
}

function TweetDetailsScreen({ route, navigation }) {
  //   console.log(route);
  return (
    <Screen>
      <Text>Tweet Details</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push("TweetDetails")}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </Screen>
  );
}

function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTintColor: "#fff",
        headerTitleAlign: "center",
        headerTitleStyle: { fontWeight: "bold", fontStyle: "italic" },
        headerStyle: { backgroundColor: "#f4511e" },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTintColor: "black",
          headerShown: false,
        }}
      />
      <Stack.Screen name="Tweets" component={TweetsScreen} />
      <Stack.Screen
        name="TweetDetails"
        component={TweetDetailsScreen}
        //   options={{ title: "Tweet Details" }}
        options={({ route }) => ({
          title: "ID: " + JSON.stringify(route.name),
        })}
      />
    </Stack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: "orange",
        activeTintColor: "white",
        inactiveBackgroundColor: "lightgrey",
        inactiveTintColor: "black",
      }}
    >
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
        component={StackNavigator}
      />
      <Tab.Screen
        name="Account"
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
        }}
        component={AccountScreen}
      />
    </Tab.Navigator>
    // <Tab.Navigator
    //   tabBarOptions={{
    //     activeBackgroundColor: "tomato",
    //     activeTintColor: "white",
    //     inactiveBackgroundColor: "lightgrey",
    //     inactiveTintColor: "black",
    //   }}
    // >
    //   <Tab.Screen
    //     name="Home"
    //     options={{
    //       tabBarIcon: ({ color, size }) => (
    //         <MaterialCommunityIcons name="home" size={size} color={color} />
    //       ),
    //     }}
    //     component={HomeScreen}
    //   />
    //   <Tab.Screen
    //     name="Tweets"
    //     options={{
    //       tabBarIcon: ({ color, size }) => (
    //         <MaterialCommunityIcons name="twitter" size={size} color={color} />
    //       ),
    //     }}
    //     component={TweetsScreen}
    //   />
    // </Tab.Navigator>
  );
}

function NativagationConcepts() {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <TabNavigator />
    </NavigationContainer>
  );
}

export default NativagationConcepts;

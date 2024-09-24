import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import ListingEditScreen from "../screens/ListingEditScreen";
import routes from "./routes";
import colors from "../config/colors";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import NewListingButton from "./NewListingButton";

const Tab = createBottomTabNavigator();

function AppNavigation() {
  return (
    <Tab.Navigator tabBarOptions={{ activeTintColor: colors.primary }}>
      <Tab.Screen
        name="Feed"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
        component={FeedNavigator}
      />
      <Tab.Screen
        name="ListingEditScreen"
        options={({ navigation }) => ({
          tabBarButton: () => {
            return (
              <NewListingButton
                onPress={() => navigation.navigate("ListingEditScreen")}
              />
            );
          },
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="plus-circle"
              size={size}
              color={color}
            />
          ),
        })}
        component={ListingEditScreen}
      />
      <Tab.Screen
        name="AccountScreen"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
        }}
        component={AccountNavigator}
      />
    </Tab.Navigator>
  );
}

export default AppNavigation;

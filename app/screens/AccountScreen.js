import React from "react";
import Screen from "../components/customComponents/Screen";
import ListItem from "../components/customComponents/ListItem";
import { View, FlatList, Text } from "react-native";
import colors from "../config/colors";
import Icon from "../components/customComponents/Icon";
import SeparatorComponent from "../components/customComponents/SeparatorComponent";

const menuItems = [
  {
    _id: "1",
    title: "my listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: "dodgerblue",
    },
    targetScreen: "MyListings",
  },
  {
    _id: "2",
    title: "my messages",
    icon: {
      name: "email",
      backgroundColor: "tomato",
    },
    targetScreen: "Messages",
  },
  {
    _id: "3",
    title: "my posts",
    icon: {
      name: "post",
      backgroundColor: "violet",
    },
    targetScreen: "Posts",
  },
];

function AccountScreen({ navigation }) {
  return (
    <Screen style={{ backgroundColor: colors.cream }}>
      <ListItem
        style={{ marginBottom: 60 }}
        title={"bal reddy"}
        subTitle={"balreddy@gmail.com"}
        image="https://images.pexels.com/photos/35435/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
      />

      <View style={{ marginBottom: 40 }}>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => String(item._id)}
          ItemSeparatorComponent={<SeparatorComponent />}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>

      <ListItem
        title={"logout"}
        IconComponent={
          <Icon name={"logout-variant"} backgroundColor="orange" />
        }
      />
    </Screen>
  );
}

export default AccountScreen;

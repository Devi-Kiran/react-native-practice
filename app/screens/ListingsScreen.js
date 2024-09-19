import React from "react";
import { FlatList, Text } from "react-native";

import Screen from "../components/customComponents/Screen";
import CardComponent from "../components/customComponents/CardComponent";
import colors from "../config/colors";

const listings = [
  {
    _id: 1,
    title: "Black Fabric Sectional Sofa",
    price: "8999",
    image:
      "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    _id: 2,
    title: "2-seat Orange Leather Sofa",
    price: "5999",
    image:
      "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    _id: 3,
    title: "Brown, White, and Blue Wooden Board",
    price: "9999",
    image:
      "https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    _id: 4,
    title: "Two Assorted-color Padded Chairs",
    price: "4999",
    image:
      "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    _id: 5,
    title: "Black Mattress",
    price: "12999",
    image:
      "https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

function ListingsScreen() {
  return (
    <Screen
      style={{ backgroundColor: colors.cream, padding: 15, overflow: "scroll" }}
    >
      <FlatList
        data={listings}
        keyExtractor={(item) => String(item._id)}
        renderItem={({ item }) => {
          return (
            <CardComponent
              image={item.image}
              title={item.title}
              subTitle={item.price + " /-"}
            />
          );
        }}
      />
    </Screen>
  );
}

export default ListingsScreen;

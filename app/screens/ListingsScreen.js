import React, {useEffect} from "react";
import { FlatList, ScrollView } from "react-native";

import Screen from "../components/customComponents/Screen";
import CardComponent from "../components/customComponents/CardComponent";
import ActivityIndicator from "../components/customComponents/ActivityIndicator";
import listingsApi from "../api/listings";
import useApi from "../hooks/useApi";
import colors from "../config/colors";


function ListingsScreen() {
  const {data, loading, request, error} = useApi(listingsApi.getListings); 
  useEffect(() => {
    request()
  },[]);

  // console.log(data, loading, error)  
  
  return (
    <Screen style={{ backgroundColor: colors.cream, padding: 15 }}>
      <ActivityIndicator visible={loading}/> 
      <FlatList
        data={data}
        keyExtractor={(item) => String(item._id)}
        renderItem={({ item }) => {
          return (
            <CardComponent
              id={item._id}
              images={item.images} 
              title={item.title}
              subTitle={item.price + " /-"}
              onPress={{}}
            />
          );
        }}
      />
    </Screen>
  );
}

export default ListingsScreen;

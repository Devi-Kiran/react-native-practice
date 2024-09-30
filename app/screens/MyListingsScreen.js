import React, { useEffect, useState } from "react";
import { Text, Button, ActivityIndicator } from "react-native";

// import ActivityIndicator from "../components/customComponents/ActivityIndicator";
import useApi from "../hooks/useApi";
import listingsApi from "../api/listings";
import commentsApi from "../api/comments";
import AppText from "../components/customComponents/AppText";
import Screen from "../components/customComponents/Screen";

function MyListingsScreen() {
  // const {data: posts, loading: postsLoading, error: postsError, request: loadPosts} = useApi(listingsApi.getListings);
  const getListinsgApi = useApi(listingsApi.getListings);
  const getCommentsApi = useApi(commentsApi.getComments);

  console.log(getCommentsApi?.data[0]?.email) 


  useEffect(() => {
    getListinsgApi.request();
    getCommentsApi.request();
  }, []);

  // const [comments, setComments] = useState([]);
  // const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(false);

  // console.log(comments, error, loading) 

  // useEffect(() => {
  //   loadComments();
  // }, []);

  // const loadComments = async () => {
  //   setLoading(true);
  //   const response = await commentsApi.getComments();
  //   setLoading(false);

  //   if (!response.ok) return setError(true);

  //   setError(false);
  //   setComments(response.data);
  // };

  return (
    <Screen>
      <Text>Hello world</Text>
      {getListinsgApi.error && (
        <>
          <AppText>Couldn't retrive the listings</AppText>
          <Button title="Retry" onPress={loadPosts} />
        </>
      )}
      {getListinsgApi.loading && (
        <ActivityIndicator animating={getListinsgApi.loading} size={50} />
      )}
      {/* {loading && <ActivityIndicator visible={loading} />} */}

      <Text>MyListings</Text>
      {getListinsgApi.data?.map((post) => {
        return <AppText key={post?.id}>{post?.title}</AppText>;
      })}
      
    </Screen>
  );
}

export default MyListingsScreen;

import React, { useEffect } from "react";
import { StyleSheet, FlatList, ActivityIndicator } from "react-native";

import Screen from "../components/customComponents/Screen";
import postsApi from "../api/posts";
import useApi from "../hooks/useApi";
import Post from "../components/customComponents/Post";
import colors from "../config/colors";
import LoginAndSignupButton from "../components/customComponents/LoginAndSignupButton";

function PostsScreen({ navigation }) {
  const getPostsApi = useApi(postsApi.getPost);
  useEffect(() => {
    getPostsApi.request();
  }, []);
  return (
    <Screen style={styles.container}>
      {getPostsApi.error && (
        <>
          <AppText>Couldn't retrive the listings</AppText>
          <Button title="Retry" onPress={loadPosts} />
        </>
      )}
      {getPostsApi.loading && (
        <ActivityIndicator animating={getPostsApi.loading} size={50} />
      )}
      <LoginAndSignupButton
        buttonText={"Add Post"}
        onPress={() => navigation.navigate("AddPost")}
      />
      <FlatList
        data={getPostsApi.data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Post
            title={item.title}
            userId={item.userId}
            body={item.body}
            onPress={() => alert(item.userId)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.cream,
    padding: 15,
  },
});

export default PostsScreen;

import client from "../api/client";

const endPoint = "posts";

const getPost = () => client.get(endPoint);

const AddPost = (postData, getProgress) => {
  return client.post(endPoint, postData, {
    onUploadProgress: progress => getProgress(progress.loaded / progress.total)
  });
};

export default {
  AddPost,
  getPost,
};

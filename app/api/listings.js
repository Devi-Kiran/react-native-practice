// import client from "./client";

// const endPoint = "/posts";

// const getListings = () => client.get(endPoint);

// export default {
//   getListings,
// };

import client from "./client";

const endPoint = "listings";

const getListings = () => client.get(endPoint);

const postListing = (listingData, getProgress) => {
  return client.post(endPoint, listingData, {
    onUploadProgress: progress => getProgress(progress.loaded / progress.total)
  });
}

export default {
  getListings,
  postListing
};

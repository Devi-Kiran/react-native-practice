import client from "./client";

const endPoint = "/posts"; 

const getListings = () => client.get(endPoint);

export default {
  getListings,
};

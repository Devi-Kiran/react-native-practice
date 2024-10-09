// import { create } from "apisauce";
// import cache from "../utility/cache";

// const apiClient = create({
//   baseURL: "https://jsonplaceholder.typicode.com/",
// });

// // const get = apiClient.get;

// // apiClient.get = async (url, params, axiosConfig) => {
// //   const response = await get(url, params, axiosConfig);

// //   if (response.ok) {
// //     cache.storage(url, response.data);
// //     return response;
// //   }

// //   const data = await cache.get(url);
// //   return data ? { ok: true, data } : response;
// // };

// export default apiClient;



import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.0.102:3001/"
})

export default apiClient;
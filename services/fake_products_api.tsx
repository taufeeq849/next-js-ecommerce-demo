import axios from "axios";

const baseUrl: string = process.env.API_BASE_URL || "https://fakestoreapi.com";
export const fetchAllProducts = () =>
  axios.get(`${baseUrl}/products`).then(({ data }) => data);

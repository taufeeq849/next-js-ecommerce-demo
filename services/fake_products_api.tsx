import axios from "axios";

export const fetchAllProducts = () =>
  axios.get("https://fakestoreapi.com/products").then(({ data }) => data);

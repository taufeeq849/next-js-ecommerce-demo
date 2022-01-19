import axios from "axios";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { IProduct, Product } from "../components/Product";
import Shop from "../components/Shop";
import styles from "../styles/Home.module.css";
import fetcher from "../utils/fetcher";
const fetchAllProducts = () =>
  axios.get("https://fakestoreapi.com/products").then(({ data }) => data);

export const getStaticProps: GetStaticProps = async (context) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery("allProducts", () => fetchAllProducts());
  return { props: { dehydratedState: dehydrate(queryClient) } };
};
const Home: NextPage = () => {
  const {
    data: productData,
    isLoading: productsLoading,
    error: productError,
  } = useQuery("allProducts", fetchAllProducts);

  if (productsLoading) return <h1>loading...</h1>;
  if (productError) return <h1> error...</h1>;

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Shop productData={productData} />
      </main>
    </div>
  );
};

export default Home;

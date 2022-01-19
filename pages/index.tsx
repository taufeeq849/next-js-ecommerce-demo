import axios from "axios";
import type { GetStaticProps, NextPage } from "next";
import { fetchAllProducts } from "../services/fake_products_api";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { Checkout } from "../components/cart/Checkout";
import Shop from "../components/shop/Shop";
import styles from "../styles/Home.module.css";

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
        <Checkout />
      </main>
    </div>
  );
};

export default Home;

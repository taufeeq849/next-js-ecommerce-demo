import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useQuery } from "react-query";
import { IProduct, Product } from "../components/Product";
import Shop from "../components/Shop";
import styles from "../styles/Home.module.css";
import fetcher from "../utils/fetcher";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Shop />
      </main>
    </div>
  );
};

export default Home;

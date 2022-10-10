import Head from "next/head";
import { ReactElement } from "react";

import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import type { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Buy me a coffee</title>
        <meta name="description" content="Buy me a coffee landing page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex items-center justify-center content-center h-screen">
        <span className="text-4xl">buymeacoffee.com/</span>
        <input
          className="text-4xl bg-transparent focus-visible:outline-none"
          placeholder="yourname"
        />
        <button className="bg-yellow-300 text-black p-2 m-2 rounded-3xl">
          Start your page
        </button>
      </div>
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;

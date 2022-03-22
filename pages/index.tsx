import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Board } from "../app/components/Board";
import { Header } from "../app/components/Header";

const Home: NextPage = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <div>
      <Head>
        <title>2048 GAME</title>
        <meta
          name="description"
          content="2048 Game made by adrianfrackowiak.com"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <Header />
        <Board />
      </div>
    </div>
  );
};

export default Home;

import type { NextPage } from "next";
import Head from "next/head";
import { Particles } from "../components/Particles";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>JFF - Project</title>
        <meta
          name="description"
          content="Just For Fun Project - Original Website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <Particles />
        <div className={styles.container}>
          <h1 className={styles.title}>Welcome to Just For Fun Project</h1>
          <p className={styles.paragraph}>
            Here, you are going to learn how to create a project or a company
            enjoying the process{" "}
            <span className="blueText">let&apos;s make it happen</span>
          </p>
        </div>
      </header>
      <main></main>
    </div>
  );
};

export default Home;

import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Nav from '../components/Nav/Nav';
import Hero from '../components/Hero/Hero';

export default function Home() {
  return (
    <>
      <Head>
        <title>Webtronics</title>
        <meta name='description' content='Front-End Developer Course' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Nav />
      <Hero />
      <main className={styles.main}></main>
    </>
  );
}

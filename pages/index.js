import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">my blog!</a>
        </h1>

        <p className={styles.description}>
          The home for all my 
          <code className={styles.code}>ideas</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>About me &rarr;</h3>
            <p>Find in-depth information about me and myself.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Thoughts &rarr;</h3>
            <p>A little about my learnings and what I'm thinking</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>I have some live applications that could be usefull for you</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Portfolio &rarr;</h3>
            <p>
              Interested on what have I been worked on and already built?
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://next.new" target="_blank" rel="noopener noreferrer">
          Created with&nbsp;<b>WebPublisher</b>&nbsp;⚡️
        </a>
      </footer>
    </div>
  );
}

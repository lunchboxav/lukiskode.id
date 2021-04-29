import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Kumpulan kelas lintas disiplin</h1>

        <p className={styles.description}>
          Lukis Kode menyediakan berbagai kelas untuk mengembangkan kemampuanmu,
          dengan merambah bidang baru. Jadilah talenta yang mampu berbicara dan
          berkontribusi lintas disiplin.
        </p>

        <p className={styles.description}>
          Kelas pertama kami,{" "}
          <Link href="#">
            <a>CSS untuk Designer</a>
          </Link>
          , akan segera dibuka!
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.twitter.com/kotakmakan"
          target="_blank"
          rel="noopener noreferrer"
        >
          &#169; Adityo Pratomo 2021 🇮🇩
        </a>
      </footer>
    </div>
  );
}

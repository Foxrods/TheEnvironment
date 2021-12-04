import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css'
import Dwellers from './dwellers';

export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>The Environment</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          ThE ENviRoNMeNT
        </h1>

        <Dwellers></Dwellers>
      </main>
    </div>
  )
}

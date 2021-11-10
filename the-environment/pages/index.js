import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Environment</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          THE ENVIRONMENT
        </h1>

        <div className={styles.description}>
          ENTER
        </div>
        <div className={styles.description}>
          ABOUT
        </div>
      </main>
    </div>
  )
}

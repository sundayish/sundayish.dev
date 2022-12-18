import Head from 'next/head'
//import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

//const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>sundayish</title>
        <meta name="description" content="Tom Sonntags personal website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/portrait_tom.png" />
      </Head>
      <main className={styles.main}>
        <div className={styles.center}>
          <h1>beta</h1>
        </div>

        <div className={styles.description}>
          <p>
            whilst this is building,<br/> get in touch with me:&nbsp;
            <code className={styles.code}><a href="mailto:tom@sundayish.dev">tom@sundayish.dev</a></code>
          </p>
        </div>
      </main>
    </>
  )
}

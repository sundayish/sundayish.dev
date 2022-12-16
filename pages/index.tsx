import Head from 'next/head'
import Image from 'next/image'
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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/sundayish.svg"
            alt="sundayish text"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/portrait_tom.png"
              alt="13"
              width={200}
              height={200}
              priority
            />
          </div>

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

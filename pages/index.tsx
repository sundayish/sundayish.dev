import Head from 'next/head'
import LandingPage from "../components/Landing";
import Epic from "../components/Epic";
//import { Inter } from '@next/font/google'

//const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
            <Head>
                <title>sundayish</title>
                <meta name="description" content="Tom Sonntags personal website"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/portrait_tom.png"/>
            </Head>
            <div className="relative">
                <LandingPage />
                <Epic />
            </div>
        </>
    )
}

import Head from 'next/head'
import Navbar from "../components/Navbar";
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
            <Navbar/>
        </>
    )
}

import Head from "next/head";
import GridLayout from "../components/GridLayout";

export default function Blogs() {
    return (
        <>
            <Head>
                <title>sundayish</title>
                <meta name="description" content="Tom Sonntags Blogs"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/portrait_tom.png"/>
            </Head>
            <div className="relative bg-stone-900">
                <GridLayout />
            </div>
        </>
    )
}
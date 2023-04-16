import Head from 'next/head'
import Nav from '@/components/Nav/Nav'

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

            <main className=''></main>
        </>
    )
}

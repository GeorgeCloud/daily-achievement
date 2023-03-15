import Head from 'next/head'
import { Inter } from 'next/font/google'
// import classNames from 'classnames'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Daily Achievement</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
      <h1 class="text-sky-400">
        Hello world!
      </h1>
      </main>
    </>
  )
}

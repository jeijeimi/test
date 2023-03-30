import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import Button from 'components/buttons'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Hello there</title>
      </Head>
      <main>
        <Button />
      </main>
    </>
  )
}

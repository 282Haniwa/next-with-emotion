import React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import { Hello } from 'src/components/Hello'
import styles from 'src/styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Hello name="World" />
      </main>
    </div>
  )
}

export default Home

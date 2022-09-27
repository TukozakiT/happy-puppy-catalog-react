import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from './Home.module.css'
import Layout from '../components/layout_template/layout'

const Home: NextPage = () => {
  return (
    <Layout >
      <h1 className={styles.classeTeste}>Nossa página</h1>
    </Layout>
  )
}

export default Home

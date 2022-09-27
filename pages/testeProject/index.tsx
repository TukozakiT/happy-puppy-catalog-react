import type { NextPage } from 'next'
import Image from 'next/image'
//import styles from './Home.module.css'
import Layout from '../../components/layout_template/layout'
import HeaderProject from '../../components/testComponents/HeaderProject'
import ProjectBigNumbers from '../../components/testComponents/ProjectBigNumbers/ProjectBigNumbers'

const Home: NextPage = () => {
  return (
    <Layout >
        <HeaderProject/>
        <ProjectBigNumbers/>
    </Layout>
  )
}

export default Home

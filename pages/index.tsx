import type { NextPage ,GetStaticProps} from 'next'
import Head from 'next/head'
import Products from '../components/products/Products'


const Home:NextPage = ()=>{
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Products />
    </>
  )
}

export default Home



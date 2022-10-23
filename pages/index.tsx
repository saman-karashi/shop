import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Products from '../components/products/Products';
import Modal from '../components/modal/Modal';
import {useContext} from 'react';
import {MyContext} from '../store/Context';
import Filters from '../components/filters/Filters';

type Props = {
 data:{
  id:number,
  title:string,
  price:number,
  description:string,
  category:string,
  image:string,
  rating:{count:number,rate:number}
 }[]
};

export const getStaticProps:GetStaticProps = async()=>{
const request = await fetch('https://fakestoreapi.com/products');
const data = await request.json();

return{
    props:{
        data
    }
}
}

const Home:NextPage<Props> = ({data})=>{
const {modalIsActive} = useContext(MyContext);
  return (
    <>
      <Head>
        <title>Online shop</title>
      </Head>
      <Filters />
      <Products data={data} /> 
      {
      modalIsActive && 
      <>
        <Modal />
        <div className="modal_overlay"></div>
      </>
      }
    </>
  )
}

export default Home



import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Products from '../components/products/Products';
import Modal from '../components/modal/Modal';
import React , {useContext,useEffect} from 'react';
import {MyContext} from '../store/Context';
import Filters from '../components/filters/Filters';
import useIsomorphicEffects from '../hooks/useIsomorphicEffects';

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
const useIsomorphicLayoutEffect = useIsomorphicEffects()
const {modalIsActive} = useContext(MyContext);
const {
  choosedProducts,
  setChoosedProducts
  } = useContext(MyContext);

useEffect(()=>
  localStorage.setItem('Products',JSON.stringify(choosedProducts))
,[choosedProducts])


useIsomorphicLayoutEffect(()=>{
  setChoosedProducts(JSON.parse(localStorage.getItem('Products') || ''))
},[])


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



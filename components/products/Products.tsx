import { GetStaticProps, NextPage } from 'next';
import { argv } from 'process';
import {useEffect,useState} from 'react';
import Product from '../product/Product';

type Data = {
id:number,
title:string,
description:string,
price:number,
category:string,
image:string,
rating:{count:number,rate:number}
}[];


const Products:NextPage = () => {
const [products , setProducts] = useState<Data>([]);

    const getPhonesHandler = async()=>{
        const request = await fetch('https://fakestoreapi.com/products');
        const res = await request.json();
        setProducts(res);
    }


    useEffect(()=>{
        getPhonesHandler();
    },[])

  return (
    <section className='grid mt_2 px_1'>
        {
            products.map((product)=>{
                return(
                    <Product key={product.id} {...product} />
                )
            })
        }
    </section>
  )
}

export default Products;
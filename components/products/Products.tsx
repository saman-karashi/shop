import {NextPage } from 'next';
import Product from '../product/Product';

type Data = {
data:{
id:number,
title:string,
description:string,
price:number,
category:string,
image:string,
rating:{count:number,rate:number}
}[]

};


const Products:NextPage<Data> = ({data}) => {
  return (
    <section className='grid mt_2 px_1'>
        {
            data.map((product)=>{
                return(
                    <Product key={product.id} {...product} />
                )
            })
        }
    </section>
  )
}

export default Products;
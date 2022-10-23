import {NextPage } from 'next';
import { MyContext } from '../../store/Context';
import Product from '../product/Product';
import {useContext,useState,useEffect} from 'react';

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

type Products ={
id:number,
title:string,
description:string,
price:number,
category:string,
image:string,
rating:{count:number,rate:number}
}


const Products:NextPage<Data> = ({data}) => {
const {
filterItems
} = useContext(MyContext);
const [filteredProducts , setFilteredProducts] = useState<Products[]>(data)

useEffect(()=>{
const filtered = data.filter((product)=> (product.category === filterItems))

if(filterItems === 'all'){
  setFilteredProducts(data)
}else{
  filterItems && setFilteredProducts(filtered)
}

},[filterItems])


  return (
    <section className='grid px_1'>
        {
            filteredProducts.map((product)=>{
              
                return(
                    <Product key={product.id} {...product} />
                )
              
            })
        }
    </section>
  )
}

export default Products;
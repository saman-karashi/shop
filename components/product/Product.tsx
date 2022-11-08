import { NextPage} from 'next';
import {useContext,useCallback,useEffect} from 'react';
import { ShoppingCart } from '../../icons/Icons';
import Image from 'next/image';
import {MyContext} from '../../store/Context';

type Product ={
id:number,
title:string,
price:number,
description:string,
category:string,
image:string,
rating:{count:number,rate:number},
quantity?:number
}

const Product:NextPage<Product> = ({image,title,price,id,category,description,rating}) => {
const {
setChoosedProducts,
choosedProducts
} = useContext(MyContext);

const shoppingBtnHandler = (arg:Product)=>{
const present = choosedProducts.some((product)=> product.id === id);

if(!present){
arg['quantity'] = 1;
setChoosedProducts((prev:Product[]) => [...prev , arg])
}else{
setChoosedProducts((prev:Product[]) =>{
    prev.map((item:Product)=>{
        if(item.id === arg.id && item.quantity){
          item.quantity++
        }
    })
    return [...prev]
})
}
}


  return (
    <div className="card">
        <div className="card_image">
            <Image priority={true} src={image} alt={title} width="400px" objectFit='contain' height="300px"/>
        </div>
       <div className="card_content py_2 px_1">
            <div className='card_title'>
                <h3 className='title'>{title}</h3>
            </div>
            <div className='mt_1 card_description'>
                <div className='card_expense_wrapper'>
                    <span className='card_price'>
                    Price:
                    <span className='ml_1 card_expense'>${price}</span>
                    </span>
                    
                    <button onClick={()=>{
                      shoppingBtnHandler({
                        image,
                        price,
                        description,
                        id,
                        rating,
                        title,
                        category,
                        quantity: 0
                        }) 
                    }} className='card_buy_btn'>
                        <ShoppingCart color="#fff" />
                    </button>
                </div>
            </div>
       </div>
    </div>
  )
}

export default Product
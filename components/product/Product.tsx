import { NextPage} from 'next';
import {useContext} from 'react';
import { ShoppingCart } from '../../icons/Icons';
import Image from 'next/image';
import {MyContext} from '../../store/Context';

interface Product {
image:string,
title:string,
price:number
}

const Product:NextPage<Product> = ({image,title,price}) => {
const context = useContext(MyContext);

  return (
    <div className="card">
        <div className="card_image">
            <Image src={image} alt={title} width="400px" objectFit='contain' height="300px"/>
        </div>
       <div className="card_content py_2 px_1">
            <div className='card_title'>
                <h3 className='title'>{title}</h3>
            </div>
            <div className='mt_1 card_description'>
                <p className='card_price'>Price:</p>
                <div className='card_expense_wrapper'>
                    <span className='card_expense'>${price}</span>
                    <button onClick={context.increaseQuantityHandler} className='card_buy_btn'>
                        <ShoppingCart color="#fff" />
                    </button>
                </div>
            </div>
       </div>
    </div>
  )
}

export default Product
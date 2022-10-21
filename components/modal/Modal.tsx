import { NextPage } from 'next'
import {useContext,useState,useEffect} from 'react';
import {Minus , Plus, Times} from '../../icons/Icons';
import { MyContext } from '../../store/Context';


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


const Modal:NextPage = () => {
const {
hideModalHandler,
choosedProducts,
setChoosedProducts
} = useContext(MyContext);

const newArr = choosedProducts.map((product)=> product.price * product.quantity)
const sum = newArr.reduce((acc,next)=> acc += next,0);

const decreaseBtnHandler = (id:number)=>{
const present = choosedProducts.some(product => product.id === id);

if(present){
    setChoosedProducts((prev:Product[]) =>{
        prev.map((item:Product)=>{
            if(item.quantity && item.quantity <= 0)return;
            if(item.id === id && item.quantity){
              item.quantity--
            }
        })
        return prev.filter(item => item.quantity !== 0)
    }) 
}
}
const increaseBtnHandler = (id:number)=>{
    setChoosedProducts((prev:Product[]) => {
        prev.filter((item:Product)=>{
                if(item.id === id && item.quantity !==  undefined){
                    item.quantity = item.quantity + 1;
                }
        })
    
        return [...prev]
    })
}

  return (
    <div className='modal px_1 py_1'>
        <header className="modal_header">
            <button className='closeModal_btn btn' onClick={hideModalHandler}>
                <Times />
            </button>
        </header>
        
        {
            choosedProducts.length == 0 ? 
            <p className='notify_text_modal mt_5'>There is not any items</p>
            :
            <>{
            choosedProducts.map(({title,price,id,quantity})=>(
                    <div key={id} className='modal_body mt_1'>
                            <div>
                                <p className='modal_title'>{title}</p>
                                <p className='modal_price'>${price}</p>
                            </div>
                            <div className='card_add'>
                                <button onClick={()=> decreaseBtnHandler(id)} className='decrement_btn btn'>
                                    <Minus />
                                </button>
                                <span className='modal_quantity'>{quantity}</span>
                                <button onClick={()=> increaseBtnHandler(id)} className='increment_btn btn'>
                                    <Plus />
                                </button>
                            </div>
                    </div>
                ))
            }
            <div className="modal_total_expenses mt_1">
                <div className='modal_expense'>
                    <span className='total_text'>Total:</span>
                    <span className='total'>${Math.floor(sum).toFixed(2)}</span>
                </div>
            </div>
            </>
        }
    </div>
  )
}

export default Modal
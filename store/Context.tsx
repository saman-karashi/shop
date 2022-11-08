import { createContext,FC,ReactNode,useState,useEffect,useLayoutEffect } from "react";

type Product ={
id:number,
title:string,
price:number,
description:string,
category:string,
image:string,
rating:{count:number,rate:number},
quantity:number
}


type DefaultValues ={
modalIsActive:boolean,
displayModalHandler:()=> void,
hideModalHandler:()=> void,
setChoosedProducts:(arg:any)=> void,
choosedProducts:Product[],
filterItems:string,
setFilter:(arg:any)=>void
}

type Props = {
children:ReactNode
}

export const MyContext = createContext<DefaultValues>({setFilter:()=>{},filterItems:'',choosedProducts:[],setChoosedProducts:()=>{},modalIsActive:false,displayModalHandler:()=>{},hideModalHandler:()=>{}});

const GlobalState:FC<Props> = ({children})=>{
const [modalIsActive,setModalIsActive] = useState<boolean>(false);
const [choosedProducts,setChoosedProducts] = useState<Product[]>([]);
const [filterItems,setFilter] = useState<string>('');

function displayModalHandler(){
setModalIsActive(true)
}

function hideModalHandler(){
setModalIsActive(false)
}

return (
    <MyContext.Provider value={{setFilter,filterItems,choosedProducts,setChoosedProducts,modalIsActive,displayModalHandler,hideModalHandler}}>{children}</MyContext.Provider>
)

}
 
export default GlobalState;
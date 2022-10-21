import { createContext,FC,ReactNode,useState } from "react";

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
displayModalHandler:(arg:any)=> void,
hideModalHandler:()=> void,
setChoosedProducts:(arg:any)=> void,
choosedProducts:Product[]
}

type Props = {
children:ReactNode
}

export const MyContext = createContext<DefaultValues>({choosedProducts:[],setChoosedProducts:()=>{},modalIsActive:false,displayModalHandler:()=>{},hideModalHandler:()=>{}});

const GlobalState:FC<Props> = ({children})=>{
const [modalIsActive,setModalIsActive] = useState<boolean>(false);
const [choosedProducts,setChoosedProducts] = useState<Product[]>([])

function displayModalHandler(setMenuIsActive:any){
setModalIsActive(true)
setMenuIsActive(false)
}

function hideModalHandler(){
setModalIsActive(false)
}

return (
    <MyContext.Provider value={{choosedProducts,setChoosedProducts,modalIsActive,displayModalHandler,hideModalHandler}}>{children}</MyContext.Provider>
)

}
 
export default GlobalState;
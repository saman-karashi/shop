import { createContext,FC,ReactNode,useState } from "react";

type DefaultValues ={
quantity:number,
increaseQuantityHandler:()=> void
}

type Props = {
children:ReactNode
}

export const MyContext = createContext<DefaultValues>({quantity:0,increaseQuantityHandler:()=>{}});

const GlobalState:FC<Props> = ({children})=>{
const [quantity,setQuantity] = useState<number>(0);


function increaseQuantityHandler(){
setQuantity(prev => prev + 1);
}

return (
    <MyContext.Provider value={{increaseQuantityHandler,quantity}}>{children}</MyContext.Provider>
)

}
 
export default GlobalState;
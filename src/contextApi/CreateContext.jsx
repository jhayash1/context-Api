import { createContext, useState } from "react";

const CreateContext = createContext()

export function CartProvider({children}){
const [cart, setCart] = useState([]);
  const addToCart = (title, price, url) => {
  setCart((prev) => [...prev, { title, price, url }]);
};
  return(
    <>
    <CreateContext.Provider value={{cart,addToCart}}>
        {children}
    </CreateContext.Provider>
    
    </>
  )
}

export default CreateContext;
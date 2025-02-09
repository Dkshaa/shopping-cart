//create the contex
//provide the state to the context
//wrap context in root comp
//consume the context using useContext

import { createContext, useEffect, useState } from "react";

export const ShoppingCartContext = createContext(null)

const ShoppingCartProvider=({children})=>{
    const [loading,setLoading] =useState(false)
    const [productLists,setProductLists] =useState([])

    const fetchproductList=async()=>{
        setLoading(true)
        const product =  await fetch('https://dummyjson.com/products')
        const list = await product.json()
        //console.log(list)
        if(list && list.products){
            setProductLists(list)
            setLoading(false)
        }
       
    }

    useEffect(()=>{
        fetchproductList()
    },[])
    //
    console.log(productLists)
    return (
        <>
            <ShoppingCartContext.Provider 
                value={{productLists,loading}}
            >
                {children}
            </ShoppingCartContext.Provider>
        </>
    )
}
export default ShoppingCartProvider
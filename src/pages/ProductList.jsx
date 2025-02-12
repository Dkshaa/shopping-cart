import { useContext } from "react"
import { ShoppingCartContext } from "../Context"
import ProductTile from "./ProductTile"


const ProductList =()=>{
    const {productLists,loading} =useContext(ShoppingCartContext)
    //console.log(productLists)

    if(loading)
    return<h1>Loading data.....Please wait</h1>

    return(
        
            <section className="py-12 bg-white sm:py-16 lg:py-20">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="max-w-md mx-auto text-center">
                        <h2 className="text-3xl font-extralight text-gray-950 sm:text-4xl">
                            Our Featured Product 
                        </h2>
                        {productLists && productLists.length >0 ? 
                            productLists.map(single=>
                                <ProductTile single={single}/>)
                        :<p>No products Found</p>}
                    </div>
                    <div className="grid grid-cols-2 gap-5 mt-10 lg:mt-16 lg:gap-8 lg:grid-cols-4">
                        
                    </div>
                </div>
            </section>
        
    )
}
export default ProductList
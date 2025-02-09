import { Route, Routes } from "react-router-dom"
import ProductList from "./pages/ProductList"
import ProductDetails from "./pages/ProductDetails"
import Cart from "./pages/CartList"



function App() {
  

  return (
    <>
      <Routes>
        <Route path = '/product-list' element={<ProductList/>}/>
        <Route path = '/product-details/:id' element={<ProductDetails/>}/>
        <Route path = '/cart-list/' element={<Cart/>}/>

      </Routes>
    </>
  )
}

export default App

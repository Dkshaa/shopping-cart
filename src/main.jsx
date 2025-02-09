import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import ShoppingCartProvider from './Context/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ShoppingCartProvider>
    <App/>
  </ShoppingCartProvider>
    
  </BrowserRouter>
)

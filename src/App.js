import React from 'react'
import './App.css'
import Topbar from './Components/topbar/Topbar'
import Head from './Components/header/Head'
import Pages from './Components/Pages/Pages'
import { CatProvider } from './Components/header/Navbar'
import { Outlet, Route, Routes } from 'react-router-dom'
import Cart from './Components/cart/Cart'
import { CartContextProvider } from './Components/Context/CartContext'

const App = () => {
  return (

    <>
      <CartContextProvider>
      
        <Routes>
          <Route path='/' index element={<Pages />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>

      </CartContextProvider>
    </>

  )
}

export default App
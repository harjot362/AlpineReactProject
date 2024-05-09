import React from 'react'
import Navbar from './Components/Navbar'
import AboutUs from './Components/AboutUs'
import Products from './Components/Products'
import OurServices from './Components/OurServices'
import Faq from './Components/Faq'
import SignUp from './Components/SignUp'
import Cart from './Components/Cart'
import "./App.css"
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Contact from './Components/Contact'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/AboutUs' element={<AboutUs/>}></Route>
        <Route path='/Products' element={<Products/>}></Route>
        <Route path='/OurServices' element={<OurServices/>}></Route>
        <Route path='/Faq' element={<Faq/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='/Login' element={<SignUp/>}></Route>
        <Route path='/Cart' element={<Cart/>}></Route>
      </Routes>
    </div>
  )
}

export default App

import React from 'react'
import { useState } from 'react'
import './style.css'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import Home from './Pages/Home'
import Category from './Pages/Category'
import Product from './Pages/Product'
import {
  Route,
  Routes
} from "react-router-dom";

function Admin() {
  const [openSideBarToggle, setOpenSideBarToggle] = useState(false)
  const openSidebar = () => {
    setOpenSideBarToggle(!openSideBarToggle)
  }
  return (
  
      <div className="grid-container">

        <Header sidebar={openSidebar} />
        <Sidebar sidebarToggle={openSideBarToggle} sidebar={openSidebar} />
        <Home />

        <Routes>
                    <Route path="/product" element={<Product />} />
                    <Route path="/category" element={<Category />} />
                    <Route path="*" element={<Home />} />
                </Routes>

       
      </div>
    
    

  )
}

export default Admin
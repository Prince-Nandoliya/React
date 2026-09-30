import React from 'react'
import {Outlet} from "react-router-dom"
import WebNavbar from '../components/Navbar'
import Footer from '../components/Footer'
const MainLayout = () => {
  return (
    <>
    <WebNavbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default MainLayout

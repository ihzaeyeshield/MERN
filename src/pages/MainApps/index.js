import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Footer } from '../../components'
import './Mainapps.scss'



const MainApps = () => {
  return (
    <div >
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default MainApps
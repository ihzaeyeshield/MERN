import React from 'react'
import { Routes as Switch, Route,Link, Outlet } from 'react-router-dom'




const MainApps = () => {
  return (
    <div>
        <p>Header</p>
        <Outlet/>
        <p>Footer</p>
    </div>
  )
}

export default MainApps
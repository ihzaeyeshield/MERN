import React from 'react'
import './Header.scss'
import Logotittle from '../../../assets/images/logotittle.png'

const Header = () => {
  return (
        <nav>
            <div className='tittle'>
                <img src={Logotittle}></img>
                <b>ARYA STARK</b>
            </div>
                <div className='menu'>
                    <div className='menu1'><a href='#'><b>Home</b></a></div>
                    <div className='menu1'><a href='#'><b>Project</b></a></div>
                    <div className='menu1'><a href='#'><b>About</b></a></div>
                </div>  
                
        </nav>
  )
}

export default Header
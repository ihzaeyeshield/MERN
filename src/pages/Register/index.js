import React from 'react'
import "./Register.scss"
import { Buttonregister, Input } from '../../components'
import Home from '../Home'

const Register = () => {
  return (
    <div className='main-page'>
      <div className='container-register'>
          <div className='sign'>
            <button className='sign-up'>Sign Up</button>
            <button className='log-in'>Log In</button>
          </div>
          <div className='form'>
            <h2>Sign Up For Free</h2>
            <div className='divide'>
              <Input  placeholder='Nama Depan'/>
              <Input  placeholder='Nama Belakang'/>
            </div>
            <Input placeholder='Email'/>
            <Input placeholder='Password'/>
            <Buttonregister onclick={<Home/>} tittle={'GET STARTED'} />
          </div>
        
      </div>
    </div>
  )
}

export default Register
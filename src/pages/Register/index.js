import React from 'react'
import "./Register.scss"
import Image from "../../assets/images/register-left.jpg"

const Register = () => {
  return (
    <div className='main-page'>
      <div className='container'>
          <div className='sign'>
            <div className='sign-up'>Sign Up</div>
            <div className='log-in'>Log In</div>
          </div>
          <div className='form'>
            <h2>Sign Up For Free</h2>
            <div className='divide'>
              <input placeholder='First Name' className='text-input1'></input>
              <input placeholder='Last Name' className='text-input1'></input>
            </div>
            <input placeholder='Email' className='text-input'></input>
            <input placeholder='Set a Password' className='text-input'></input>
            <button className='button-16'><b> GET STARTED</b></button>
          </div>
        
      </div>
    </div>
  )
}

export default Register
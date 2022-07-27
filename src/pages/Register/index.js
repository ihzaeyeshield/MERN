import React from 'react'
import "./Register.scss"
import Image from "../../assets/images/register-left.jpg"

const Register = () => {
  return (
    <div className='main-page'>
      <div className='container'>
        <div className='container2'>
          <div className='sign'>
            <div className='sign-up'>Sign Up</div>
            <div className='log-in'>Log In</div>
          </div>
          <div className='form'>
            <h2>Sign Up For Free</h2>
            <input placeholder='First Name' className='text-input'></input>
            <input placeholder='Last Name' className='text-input'></input>
            <input placeholder='Email' className='text-input'></input>
            <input placeholder='Set a Password' className='text-input'></input>
            <button>GET STARTED</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
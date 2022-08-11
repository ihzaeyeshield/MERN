import React from 'react'
import "../Register/Register.scss"
import { Buttonregister, Input } from '../../components'
import {useNavigate} from 'react-router-dom'


const Login = () => {
  
  let navigate = useNavigate();
  function handleClick() {
    navigate("/register");
  }
  
  return (
    

    <div className='main-page'>
      <div className='container'>
          <div className='sign'>
            <button className='sign-up' onClick={handleClick}>Sign Up</button>
            <button className='log-in'>Log In</button>
          </div>
          <div className='form'>
            <h2>Login</h2>
            <Input placeholder='Email'/>
            <Input placeholder='Password'/>
            <Buttonregister onclick={'/home'} tittle={'GET STARTED'} />
          </div>
        
      </div>
    </div>
  )
}

export default Login
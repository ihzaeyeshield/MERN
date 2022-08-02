import React from 'react'
import { Buttonregister, Input } from '../../components'
import './Createblog.scss'

const Createblog = () => {
  return (
    <div className="container">
        <div className="wrapper">
        <div className=""></div>
        <div className="form">
            <Input tittle={'Judul'} placeholder='Masukkan Judul'/>
            <Buttonregister tittle='Choose File'/>
                    <p>deskripsi</p>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
            <Buttonregister tittle='SUBMIT'/>
            
        </div>
        </div>
    </div>
    
  )
}

export default Createblog
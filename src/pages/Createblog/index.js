import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Buttonregister, Input } from '../../components'
import UploadImage from '../../components/atoms/UploadImage'
import './Createblog.scss'

const Createblog = () => {
  const[tittle, setTittle] = useState('');
  const[body, setBody] = useState('');
  const[image, setImage] = useState('');
  const[imagePreview, setImagePreview] = useState('');


  const onSubmit=()=>{
    console.log('tittle : ',tittle)
    console.log('body : ',body)
    console.log('image : ',image)
    //cek atau coba melihat data yang dikirim dari tombol submit
    
    const data = new FormData()
    data.append('tittle',tittle)
    data.append('body',body)
    data.append('image',image)
    //pembuatan form untuk dikirim, lebih mudah kan

    axios.post('',data,{
      headers : {
        'content-type':'multipart/form-data'
      }
    })
    .then(res=>{
      console.log('post sukses: ',res)
    })
    .catch(err=>{
      console.log('err : ', err )
    })
  }

  const onImageUpload=(e)=>{
    const file = e.target.files[0]
    setImage(file)
    setImagePreview(URL.createObjectURL(file))
    //membuat image sementara untuk preview
  }
  return (
    <div className="container">
        <div className="wrapper">
        <div className=""></div>
        <div className="form">
            <Input tittle={'Judul'} placeholder='Masukkan Judul' value={tittle} onChange={(e)=>setTittle(e.target.value)} />
            <UploadImage onChange={(e)=>onImageUpload(e)} image={imagePreview} tittle='Choose File'/>
                    <p>deskripsi</p>
                    <textarea name="" id="" cols="30" rows="10" value={body} onChange={(e)=>setBody(e.target.value)}></textarea>
            <Buttonregister tittle='SUBMIT' onClick={onSubmit}/>
            
        </div>
        </div>
    </div>
    
  )
}

export default Createblog
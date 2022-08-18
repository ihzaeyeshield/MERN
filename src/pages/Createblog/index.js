
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Buttonregister, Input } from '../../components'
import UploadImage from '../../components/atoms/UploadImage'
import {  setForm, setImagePreview } from '../../config/Redux/action'
import './Createblog.scss'
import { createBlogPostAction } from '../../config/Redux/action'

const Createblog = () => {
  const {form, imagePreview} = useSelector(state => state.createBlogPostReducer);
  const {tittle, body} = form
  const dispatch = useDispatch()

  // const[tittle, setTittle] = useState('');
  // const[body, setBody] = useState('');
  // const[image, setImage] = useState('');
  // const[imagePreview, setImagePreview] = useState('');


  const onSubmit=()=>{
    // console.log('tittle : ',tittle)
    // console.log('body : ',body)
    // console.log('image : ',image)
    //cek atau coba melihat data yang dikirim dari tombol submit
    
    createBlogPostAction(form)
    
  }

  const onImageUpload=(e)=>{
    const file = e.target.files[0]
    dispatch (setForm('image',file))
    dispatch (setImagePreview(URL.createObjectURL(file)))
    //membuat image sementara untuk preview
  }
  return (
    <div className="container">
        <div className="wrapper">
        <div className=""></div>
        <div className="form">
            <Input tittle={'Judul'} placeholder='Masukkan Judul' value={tittle} onChange={(e)=>dispatch(setForm(tittle, e.target.value)) } />
            <UploadImage onChange={(e)=>onImageUpload(e)} image={imagePreview} tittle='Choose File'/>
                    <p>deskripsi</p>
                    <textarea name="" id="" cols="30" rows="10" value={body} onChange={(e)=>dispatch (setForm(body, e.target.value)) }></textarea>
            <Buttonregister tittle='SUBMIT' onClick={onSubmit}/>
            
        </div>
        </div>
    </div>
    
  )
}

export default Createblog
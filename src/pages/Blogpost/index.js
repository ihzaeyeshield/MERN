import React, { useState } from 'react'
import Blogcard from '../../components/atoms/Blogcard'
import './Blogpost.scss'
import { Buttonregister } from '../../components/atoms'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'


const Blogpost = () => {
  
  let navigate = useNavigate();
  function handleClick() {
    navigate("/createblog");
  }
  //cara menggunakan navitate gantinya usehistory dalam react dom
  //buton menuju createblog

  
  const[dataBlog, setDataBlog]=useState([])

  useEffect(()=>{
    axios.get('http://localhost:4000/v1/blog/post')
    .then(result=>{
      console.log('data API : ',result.data);
      const responseAPI = result.data;

      setDataBlog(responseAPI.data);
    })
    .catch(err=>{
      console.log('error : ',err)
    })
  }, [])


  
  return (
    <div className="wrapper2">
      <div className="button">
      <Buttonregister tittle='CREATE' onClick={handleClick} />
      </div>
      <div className='container2'> 
      {dataBlog.map(blog=>{
        return <Blogcard 
        key={blog._id}
        image={'http://localhost:4000/'+blog.image}
        tittle = {blog.tittle}
        body = {blog.body}
        name = {blog.author.name}
        date = {blog.createdAt}
        />
      })}
       
      </div>
    </div>
  )
}

export default Blogpost
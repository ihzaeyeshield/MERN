import React from 'react'
import Blogcard from '../../components/atoms/Blogcard'
import './Blogpost.scss'
import { Buttonregister } from '../../components/atoms'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'


const Blogpost = () => {
  
  let navigate = useNavigate();
  function handleClick() {
    navigate("/createblog");
  }
  //cara menggunakan navitate gantinya usehistory dalam react dom
  //buton menuju createblog

  
  //const[dataBlog, setDataBlog]=useState([])
  //ini state local
  
  const {dataBlogGlobal} = useSelector(state => state.blogPostReducer);

  const {name} = useSelector(state=>state.globalReducer)
  //ini state Global <useSelector> Allows you to extract data from the Redux store state, using a selector function.
  const dispatch = useDispatch();
  console.log('stateglobal : ',dataBlogGlobal )

  useEffect(()=>{

    setTimeout(()=>{
      dispatch({type:'UPDATE_NAME'})
    },3000)
    //tes fungsi timeout dan mengambil nilai dari store redux

    axios.get('http://localhost:4000/v1/blog/post')
    .then(resulta=>{
      //resulta bukan fungsi, tapi parameter saja, setelah get dari API
      console.log('data API : ',resulta.data);
      const responseAPI = resulta.data;

      // setDataBlog(responseAPI.data);
      dispatch({type:'UPDATE_DATA_BLOG',payload: responseAPI.data})
      //dispatch=menugaskan sepeti menge get dari stateGlobal
      
    })
    .catch(err=>{
      console.log('error : ',err)
    })
  }, [dispatch])
// The useEffect Hook allows you to perform side effects in your components. 
// Some examples of side effects are: fetching data, directly updating the DOM, and timers. 
// useEffect accepts two arguments. The second argument is optional. useEffect(<function>, <dependency>)
//untuk hook API 

  return (
    <div className="wrapper2">
      <div className="button">
      <Buttonregister tittle='CREATE' onClick={handleClick} />
      </div>
      <p>{name}lon</p>
      <div className='container2'> 
        {dataBlogGlobal.map(blog=>{
      //dataBlog.map (.map) itu mirip memetakan/fetching/perulangan/data array 
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
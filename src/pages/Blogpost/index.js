import React from 'react'
import Blogcard from '../../components/atoms/Blogcard'
import './Blogpost.scss'
import { Buttonregister } from '../../components/atoms'


const Blogpost = () => {
  return (
    <div className="wrapper2">
      <div className="button">
      <Buttonregister tittle='CREATE'/>
      </div>
      <div className='container2'> 
        <Blogcard $detail=" ini lorem ipsum" $tittle="ini tittle" />
        <Blogcard $detail=" ini lorem ipsum" $tittle="ini tittle" />
        <Blogcard $detail=" ini lorem ipsum" $tittle="ini tittle" />
        <Blogcard $detail=" ini lorem ipsum" $tittle="ini tittle" />
        <Blogcard $detail=" ini lorem ipsum" $tittle="ini tittle" />
        <Blogcard $detail=" ini lorem ipsum" $tittle="ini tittle" />
        <Blogcard $detail=" ini lorem ipsum" $tittle="ini tittle" />
        <Blogcard $detail=" ini lorem ipsum" $tittle="ini tittle" />
        <Blogcard $detail=" ini lorem ipsum" $tittle="ini tittle" />
        <Blogcard $detail=" ini lorem ipsum" $tittle="ini tittle" />
      </div>
    </div>
  )
}

export default Blogpost
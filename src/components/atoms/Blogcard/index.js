import React from 'react'
import './Blogcard.scss'
import Image from '../../../assets/images/bghome.jpg'

const Blogcard = ({$tittle,$detail}) => {
  return (
    <div className='wrapper'>
        <img src={Image} />
        <div className='conten'>
            <h2>{$tittle}</h2>
            <p>{$detail}</p>
        </div>
    </div>
  )
}

export default Blogcard
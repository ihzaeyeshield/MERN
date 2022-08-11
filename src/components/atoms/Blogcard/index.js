import React from 'react'
import './Blogcard.scss'

const Blogcard = (props) => {
  const {image, tittle, name, date, body} = props
  return (
    <div className='blogcard-wrapper'>
        <img src={image} alt='' />
        <div className='blogcard-conten'>
            <h2>{tittle}</h2>
            <p>{name}</p>
            <p>{date}</p>
            <p>{body}</p>
        </div>
    </div>
  )
}

export default Blogcard
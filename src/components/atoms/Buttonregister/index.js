import React from 'react'
import './Buttonregister.scss'

const Buttonregister = ({tittle,...rest},{onclick}) => {
  return (
    <button className='button-16' onClick={onclick} {...rest}>{tittle}</button>
  )
}

export default Buttonregister
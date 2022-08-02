import React from 'react'
import './input.scss'

const Input = ({tittle, ...rest}) => {
  //tiitle rest adalah title input dan rest seperti meletakkan atau put
  return (
      <div className="input-title"><p>{tittle}</p>
        <input className='text-input' {...rest}></input>
      </div>
  )
}

export default Input
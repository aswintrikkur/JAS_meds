import React from 'react'
import './Button.scss'
import { useNavigate } from 'react-router-dom'

export const BaseButton = ({text,bgc,color, onClick}) => {
  const navigate = useNavigate();

  return (
    <div className='base-button-container'>
        <button  onClick={onClick} style={{backgroundColor:bgc,color:color}} > {text} </button>
      
    </div>
  )
}


export const BackButton = ({onClick}) => {
  return (
    <div className='back-button-container'>
      <button onClick={onClick} >x</button>
      
    </div>
  );
}

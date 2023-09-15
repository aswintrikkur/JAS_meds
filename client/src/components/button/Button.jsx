import React from 'react'
import './Button.scss'

export const BaseButton = ({text,bgc,color, onClick}) => {
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

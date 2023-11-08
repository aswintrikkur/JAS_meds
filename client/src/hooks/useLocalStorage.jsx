import React from 'react'

export const useLocalStorage = () => {

/**
 * 
 * @param {String} value 
 */

const getLocalStorage =(value)=>{
    return   localStorage.getItem(value)
}


  return {getLocalStorage}
}

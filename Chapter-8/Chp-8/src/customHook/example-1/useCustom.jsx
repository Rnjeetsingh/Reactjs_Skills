import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const useCustom = () => {

  const [data,setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(responce => responce.json())
    .then(result => setData(result))
    .catch(error => console.error(error))
  },[])

  return  [data]
}

export default useCustom

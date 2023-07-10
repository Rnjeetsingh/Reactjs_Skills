import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Fetch = () => {
    const [user,setUser] = useState([])
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setUser(data))
        .catch(error => console.error(error))
    },[]);


    
  return (
    <div>
    <ul>
    {
        user.map((el) =>{
            return <li key={el.id}>{el.id}--{el.name}--{el.email}</li>
        })
    }
    </ul>
     
    </div>
  )
}

export default Fetch

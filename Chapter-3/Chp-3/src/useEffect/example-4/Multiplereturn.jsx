import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Multiplereturn = () => {
    const [data,setData] = useState([])
    const [loding,setLoding] = useState(true)
    const [error,setError] = useState(null)

    useEffect(() => {
        async function getData(){
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users')
                const data = await response.json()
                setData(data);
                console.log(data)
                setLoding(false);
                
            } catch (error) {
                console.error(error)
                setError(error)
                
            }
        }
        getData();
    },[]);

    if(loding){
        return <h1>Loding....</h1>
    }
    if(error){
        return <h1>{error.message}</h1>
    }


  return (
    <div>
      <ul>
      {
        data.map((el) => {
            return (
                <li key={el.id}>{el.id}=={el.name}</li>
            )
        })

      }
      </ul>
    </div>
  )
}

export default Multiplereturn




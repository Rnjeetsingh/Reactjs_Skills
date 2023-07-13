import React from 'react'
import useCustom from './useCustom'

const CustomThird = () => {

    const [data] = useCustom();
 
  
  return (
    <div>
      <ul>
      {
        data.map((el) => {
          return <li key={el.id}>{el.usename}{el.email}</li>
        })
      }
      </ul>
    </div>
  )
}

export default CustomThird

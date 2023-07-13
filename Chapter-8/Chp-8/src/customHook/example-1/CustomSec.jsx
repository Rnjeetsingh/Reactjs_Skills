import React from 'react'
import useCustom from './useCustom'

const CustomSec = () => {

    const [data] = useCustom()
  return (
    <div>
      <ul>
      {
        data.map((el) => {
        return    <li key={el.id}>{el.id}{el.name}{el.username}</li>
        })
      }
      </ul>
    </div>
  )
}

export default CustomSec

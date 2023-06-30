import React from 'react'
import data from './data.json'
import { useState } from 'react'

const List = () => {
    const [cover,setCover] = useState(data);

   const remove = (itemId) => {
    setCover(cover.filter((e) => {
        return(
            e.id!==itemId
        )
    }))
    console.log(cover)
   }
   const update = (itemId) => {
    setCover(
        cover.map((item) => {
            if(item.id == itemId){
                return ({name:'Update Scussful'})
            }else{
                return (item)
            }
        })
    )
   }

  return (
    <div>
      <ul>
      {
      cover.map((items) => {
        return (
            <li key={items.id}>
            {items.name} {items.id}
            <br />
            <button onClick={() => remove(items.id)}>Remove</button>
            <button onClick={() => {update(items.id)}}>Update</button>
            <br /><br />
            </li>
            
            )
            
      })
    }
      </ul>
    </div>
  )
}

export default List

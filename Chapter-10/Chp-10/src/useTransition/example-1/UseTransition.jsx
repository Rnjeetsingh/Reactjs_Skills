import React, { useState, useTransition } from 'react'

const UseTransition = () => {
  const [state,setState] = useState('');
  const [list,setList] = useState([]);
  const [ispanding,setTransition] = useTransition()

  const handler = (e) =>  {
    const {value} = e.target
    setState(value)
    


    const num = 3000;
    setTransition(() => {
      const listnumber = []
      
      for(let i=0; i<=num; i++){
            listnumber.push(value)
          }
          setList(listnumber);
       })

  }
  return (
    <div>
      <input type='text' value={state} onChange={handler}/>
      {ispanding ? <h1>Loading....</h1>:list.map((el,i) => {
        return <div key={i}>{el}</div>
      })}
    </div>
  )
}

export default UseTransition

import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Use = () => {
  const [data,setData] = useState('');
  const [count,setCount] = useState(0);
  
  useEffect(() => {
    alert('Aastha Mishra')
  },[count])
  return (
    <div>
      <button onClick={() => setData('First')}>First</button>
      <br/>
      <hr/>
      <button onClick={() => setData('Second')}>Second</button>
      <br/>
      <hr/>
      <button onClick={() => setData('Thired')}>Thired</button>
      <br/>
      <hr/>
      <h1>{data}</h1>
      <button onClick={() => setCount(count + 1)}>Incriment</button>
      <h1>{count}</h1>
      <button onClick={() => {count == 0 ? setCount(0):setCount(count - 1)}}>Decrement</button>
    </div>
  )
}

export default Use

import React from 'react'
import { useState } from 'react'

const Handling = () => {
    const [count,setCount] = useState(0);
    const [data,setData] = useState('');

    const formHandler = (e) => {
        setData(e.target.value);
    }

    // const bug = () => {
    //     for(let i=0; i<=100000; i++){
    //         console.log('I am Bug Function')
    //     }
    // }
    // bug();

   return (
    <div>
    <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Count</button>
      <br />
      <hr />
      <label>Input Form :</label>
      <input onChange={formHandler} value={data} placeholder='Enter Your Name' />
      <h1>{data}</h1>
      <br />
      <hr />
    </div>
  )
}

export default Handling

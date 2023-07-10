import React, { useMemo } from 'react'
import { useState } from 'react'

const Handling = () => {
    const [count,setCount] = useState(0);
    const [data,setData] = useState('');

    const formHandler = (e) => {
        setData(e.target.value);
    }

   const result = useMemo(function bug(){
      let sum = 0;
      for(let i=0; i<=10; i++){
        sum+=i;
      }
      console.log('I am Bug Function')
      return sum
  },[count,data])
   
    

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
      <h1>{console.log(result)}</h1>
    </div>
  )
}

export default Handling

import React from 'react'
import { useState } from 'react'
import Memosec from './Memosec';

const Memo = () => {
    const[data,setData] = useState(0);
    console.log('firstMemo')

  return (
    <div>
    <h1>useMemo</h1>
    <h1>{data}</h1>
      <button onClick={() => setData(data + 1)}>Ranjeet Singh</button>
      <Memosec />
    </div>
  )
}

export default Memo

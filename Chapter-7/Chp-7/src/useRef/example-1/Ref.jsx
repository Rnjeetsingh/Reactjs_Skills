import React, { useEffect, useRef, useState } from 'react'

const Ref = () => {
    const [data,setData] = useState('');
    const render = useRef(0);

    useEffect(() => {
        render.current = render.current + 1;
    })


  return (
    <div>
      <input type='text' value={data} onChange={(e) => setData(e.target.value)}/>
      <h1>Her The Rendring Count useRef {render.current}</h1>
    </div>
  )
}

export default Ref

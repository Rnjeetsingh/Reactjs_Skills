import React, { useEffect, useRef } from 'react'

const Refsec = () => {
    const count = useRef(0);

    useEffect(() => {
        console.log('The Component has been render')
    });

    const handle = () => {
        count.current = count.current + 1;
        console.log(`Count render time ${count.current}`)
    }
  return (
    <div>
      <button onClick={handle}>Click</button>
    </div>
  )
}

export default Refsec

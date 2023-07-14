import React from 'react'
import { useState } from 'react'

const HigherOrderComponent = (OrignelComponet) => {
 
    const inhanceComponet = () => {
        const [count,setCount] = useState(0);

        const Increment = () => {
            setCount(count + 1);   
        }

        return (
            <OrignelComponet Increment={Increment} count={count}/>
        )
    }
  return ( inhanceComponet
  )
}

export default HigherOrderComponent

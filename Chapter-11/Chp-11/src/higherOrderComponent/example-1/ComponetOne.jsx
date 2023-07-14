import React from 'react'
import HigherOrderComponent from './HigherOrderComponent'

const ComponetOne = ({Increment,count}) => {

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={Increment}>Click ComponetOne</button>
    </div>
  )
}

export default HigherOrderComponent(ComponetOne);

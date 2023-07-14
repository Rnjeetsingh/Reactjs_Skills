import React from 'react'
import HigherOrderComponent from './HigherOrderComponent'

const ComponentSec = ({Increment,count}) => {



  return (
    <div>
      <h1>{count}</h1>
      <button onMouseOver={Increment}>Click ComponentSec</button>
    </div>
  )
}

export default HigherOrderComponent(ComponentSec);

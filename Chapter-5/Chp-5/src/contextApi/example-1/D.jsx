import React from 'react'
import { GreetContex, GreetContex2 } from './A'

const D = () => {
  return (
    <div>
      <GreetContex.Consumer>
      {(val) => {
        return <GreetContex2.Consumer>
        {(val2) => {
           return <h1>Using context Consumer : {val}{val2}</h1>
        }}
        </GreetContex2.Consumer>


      }}
      </GreetContex.Consumer>
    </div>
  )
}

export default D

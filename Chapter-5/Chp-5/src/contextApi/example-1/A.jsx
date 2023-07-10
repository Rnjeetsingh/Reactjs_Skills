import React from 'react'
import { createContext } from 'react'
import B from './B'
import D from './D'

const GreetContex = createContext();
const GreetContex2 = createContext();

const A = () => {
  return (
    <div>
    <GreetContex.Provider value='Ranjeet'>
    <GreetContex2.Provider value='Singh'>
    <B />
    <D />
    </GreetContex2.Provider>
    </GreetContex.Provider>  
    </div>
  )
}

export default A
export {GreetContex , GreetContex2}

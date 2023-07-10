import React from 'react'
import { createContext } from 'react'
import Cc from './Cc'

const  GreetContext = createContext();

const Aa = () => {
    const first = 'Aastha';
    const second = 'Mishra';
  return (
    <div>
      <GreetContext.Provider value={{first,second}}>
      <Cc />
      </GreetContext.Provider>
    </div>
  )
}

export default Aa
export {GreetContext}
import React from 'react'
import { GreetContext } from './Aa'
import { useContext } from 'react'

const Cc = () => {

  const useCon = useContext(GreetContext);


  return (
    <div>
      <h1>Using useContext : {useCon.first}{useCon.second}</h1>
    </div>
  )
}

export default Cc

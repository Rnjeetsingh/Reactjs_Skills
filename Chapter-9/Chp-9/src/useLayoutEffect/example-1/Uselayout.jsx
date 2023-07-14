import React, { useEffect, useLayoutEffect } from 'react'

const Uselayout = () => {

  useEffect(() => {
    console.log('I useEffect asynchronous')
  },[])
  useEffect(() => {
    console.log('I useEffect asynchronous')
  },[])
  useEffect(() => {
    console.log('I useEffect asynchronous')
  },[])

  useLayoutEffect(() => {
    console.log(' I am useLayoutEffect synchronous')
  },[]);

  useLayoutEffect(() => {
    console.log(' I am useLayoutEffect synchronous')
  },[]);
  useLayoutEffect(() => {
    console.log(' I am useLayoutEffect synchronous')
  },[]);
  return (
    <div>
      <h1>useLayoutEffect</h1>
    </div>
  )
}

export default Uselayout

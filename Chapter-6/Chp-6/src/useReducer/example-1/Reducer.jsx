import React, { useReducer } from 'react'

const reducer = (value,action) => {
    if(action.type === 'incr'){
        return ({count:value.count + 1})
    }
    else if (action.type === 'dicr'){
        return ({count:value.count - 1})
    }else{
        throw new Error('Unexpected action type')
    }

}

const Reducer = () => {

    const [value,dispatch] = useReducer(reducer,{count:0})


  return (
    <div>
    <h1>{value.count}</h1>
      <button onClick={() => dispatch({type:'incr'})}>INCRIMENT</button>
      <button onClick={() => dispatch({type:'dicr'})}>DICRIMENT</button>
    </div>
  )
}

export default Reducer

import React from 'react'
import { useState } from 'react'

const Form = () => {
    const [data,setData] = useState({
        name:'',
        email:'',
        mobile:''
    })

    const formHandler = (e) => {
        console.log(e.target.name)
       const {name,value} = e.target
       setData({[name]:value})
    
    }

    const submitFrom = (e) => {
        e.preventDefault()
    }
  return (
    <div>
      <form onSubmit={submitFrom}>
      <label>Name : </label>
      <input name='name' onChange={formHandler} value={data.name}/><br/><br/>
      <label>Email : </label>
      <input name='email' onChange={formHandler} value={data.email}/><br/><br/>
      <label>Mobile : </label>
      <input name='mobile' onChange={formHandler} value={data.mobile}/><br/><br/>
      <button type='submit' style={{marginLeft:'110px'}}>Submit</button>
      </form>
    </div>
  )
}

export default Form




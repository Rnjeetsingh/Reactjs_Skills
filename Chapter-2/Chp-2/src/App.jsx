import React from 'react';
import Count from './useState/example-1/count';
import List from './useState/example-2/List';
import Form from './useState/example-3/Form';
import './App.css'

const App = () => {
  return (
    <div className='container'>
      <h1>Ranjeet Singh</h1>
      <Count />
      <List />
      <Form />
    </div>
  )
}

export default App

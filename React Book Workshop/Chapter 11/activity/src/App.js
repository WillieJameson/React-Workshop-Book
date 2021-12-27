import React from 'react'
import CounterView from './Counter'
import './App.css'

const App = () => {
  return (
    <div>
    <h1>Counter</h1>
      <CounterView default ={5}/>
    </div>
  )
}

export default App
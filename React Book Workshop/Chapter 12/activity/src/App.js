import React from 'react'
import "./App.css"
import ChatHook from './ChatHook'
import ChatWindow from './ChatWindow'

const App = () => {
  const {state,dispatch} = ChatHook()
  const join = () => dispatch({type: "join"});
  const quit = () => dispatch({type:"quit"})

  return (
    <div>
      <button onClick={join}>Add chat Window</button>
      {state.InChat && <ChatWindow quit = {quit}/>}
    </div>
  )
}

export default App

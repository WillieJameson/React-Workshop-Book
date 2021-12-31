import React from 'react'
import './App.css';

const WithClickHandler = (props) =>{
  const clickProps = {
    onClick: (event) =>{
      console.log("you clicked the" , event.target.value)
    }
  }
  const ClickableChildren = React.Children.map(
    props.children, 
    child =>React.cloneElement(child, clickProps)
  )

  return ClickableChildren
}

const App = () =>{
  return (
    <WithClickHandler>
      <input type="button" value="first Button"/>
      <input type="button" value="second Button"/>
    </WithClickHandler>
  )
}

export default App;

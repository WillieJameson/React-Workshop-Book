import React from 'react'
import  ReactDOM  from 'react-dom';

const overlayStyles = {
  width: "100vw",
  height: "100vh",
  top: 0,
  left: 0,
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "rgba(0,0,0,.7)"
};

const Salutation = () =>{
  return(
    <div 
    style={{
    backgroundColor:'white', 
    width: "22vw", 
    height: "10vh", 
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center", 
    borderRadius:4}}>
      Welcome to the React Workshop !
    </div>
  )
}

const Overlay = () =>{
  const bodySelector = document.querySelector("body");
  bodySelector.style.overflowY = "hidden";
  // console.log(bodySelector)

  const OverlayContainer = (
    <div style={overlayStyles}>
      <Salutation />
    </div>
  )

  return ReactDOM.createPortal(OverlayContainer, bodySelector)
}

const App = () =>{
  // console.log(Overlay())
  return(
    <div>
      <Overlay/>
      <p>Lorem ipsum</p>
    </div>
  )
}

export default App;

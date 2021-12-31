import React from 'react'

const StyledButton = React.forwardRef((props,forwardedRef) =>{
  // console.log(forwardedRef.current)
  return(
    <button
    ref = {forwardedRef}
     style={{ backgroundColor: "grey", color: "white" }}
     >
      {props.children}
    </button>
  )
});

const App =() => {
  const buttonRef = React.useRef();

  React.useEffect(() => {
    console.log(buttonRef.current.getBoundingClientRect())
  })

  return (
    <StyledButton ref={buttonRef}>
      This is the button text
    </StyledButton>
  )
}

export default App

import React, { Component } from 'react';

const Focus = React.forwardRef((props, forwardedRef) =>{
  return(
    <input 
    ref={forwardedRef} type="text" placeholder={props.placeholder} />
  )
})

const Form = (props) =>{
  const inputRef = React.useRef()

  React.useEffect(()=>{
    if (props.autoFocus){
      inputRef.current.focus()
    }
  }

  )

  return(
    <div>
      <Focus ref={inputRef} placeholder='firstname'/>
      <Focus placeholder='lastname'/>
      <Focus placeholder='email'/>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <Form autoFocus ={true}/>
    );
  }
}

export default App;
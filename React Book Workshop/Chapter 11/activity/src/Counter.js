import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';


const useLogger = (value) =>{
  useEffect(() => {
    console.log("Value changed :", value)
  }, [value])
}



const CounterView = (props) => {
  const [Value, setValue] = useState(props.default);
  const Increment = () => setValue(Value + 1);
  const Decrement = () => setValue (Value - 1);
  const Reset = () => setValue(props.default);
  useLogger(Value)

  return (
    <div>
      <p>The current value is : {Value}</p>
      <br/>
      <button onClick={Increment}>
        Click here to increment it
      </button>
      <button onClick={Decrement}>  
        Click here to decrement it
      </button>
      <button onClick={Reset}>
        Click here to reset
      </button>
    </div>
  )
}

export default CounterView
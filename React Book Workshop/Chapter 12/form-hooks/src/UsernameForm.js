import React from 'react'
import { useForm } from './FormHook'

const UsernameForm = () =>{
  const {state, changeValue, ValidateInput,clearErrors} = useForm()

  const Validate = () =>{
    clearErrors()
    // Send ValidateInput to the ValidateInput(/FormHook)

    ValidateInput(i =>
      i.length < 3 ? "Username must not be under 3 characters!" : null
    );
    ValidateInput(i =>
      i.toLowerCase() === "test" ? "Cannot use a test username !" : null
    )
  }


  return(
    <div>
      <h3>Username form</h3>
      <ul className='errors'>
        {state.errors.map((err, i) =>(
          <li key= {i}>{err}</li>
        ))}
      </ul>
      <input type="text" placeholder='Username' onChange={changeValue} value={state.value}/>
      <button onClick={Validate}>Validate</button>
    </div>
  )
}

export default UsernameForm

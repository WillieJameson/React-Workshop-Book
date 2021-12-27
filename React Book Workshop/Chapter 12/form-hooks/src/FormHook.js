import  {useReducer} from 'react'

const useForm = () => {
  const [state, dispatch] = useReducer(
    (state,action) =>{
      switch (action.type){
        case "change_value":
        return {...state, value:action.value}

        case "add_error":
        return {...state, errors:[...state.errors, action.error]}

        case "clear_error":
        return {...state, errors:[]}
      
        default: 
        return state
      }
    }, 
    {
      value : '', 
      errors:[]
    }
  );

  const changeValue = (event) =>{
    const newValue = event.target.value;
    dispatch({type: "change_value" , value: newValue})
  }


  const ValidateInput = (fn) =>{

    // (i =>
    //   i.length < 3 ? "Username must not be under 3 characters!" : null
    // )
    const error = fn(state.value)
    if (error !== null){
      dispatch({
        type: "add_error",
        error: error 
      })
    }
  }

  const clearErrors = () =>{
    dispatch({type: "clear_error"})
  }

  return ({state, ValidateInput, changeValue, clearErrors} )
}

export {useForm}

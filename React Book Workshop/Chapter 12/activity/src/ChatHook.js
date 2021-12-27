import React from 'react'

const ChatHook = () => {
  const [state, dispatch] = React.useReducer(
    (state,action) =>{
      switch(action.type){
        case "add_message":
        return{
          ...state, 
          message:[...state.message, action.message]
        }
        case "clear_message": 
        return {
          ...state, 
          message: []
        }
        case "join":
        return{
          ...state, 
          InChat : true
        }

        case "quit":
        return{
          ...state,
          InChat : false
        }


        default : 
        return state
      }
    }, 
    {
      message: [],
      InChat : false
    }, 
    )
  return (  
    {state,dispatch}
  )
}

export default ChatHook

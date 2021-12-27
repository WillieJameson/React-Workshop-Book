import React from 'react'
import ChatHook from './ChatHook'
import ChatService from './ChatService';

const ChatWindow = (props) => {
  const {state,dispatch} = ChatHook()
  
  // const console = () => {
  //   return(
  //     console.log("test")
  //   )
  // };
  const quit = () => {
      console.log("test")
      dispatch({type : "test"});
    
    
  }
  // <button onClick={() => console.log(props.quit)}>Close Down</button>
  const clearMessage = () => dispatch({type : "clear_message"});

  // React.useEffect(() => {
  //   const chatService = new ChatService();  
  //   chatService.subscribe(message =>
  //     dispatch({ type: "add_message", message })
  //   );

  //   return () => {
  //     chatService.unsubscribe();
  //   };
  // }, [dispatch]);



  return (
    <div>
      Chat service is running... 
      <br/>
      <strong>Messages</strong>
      <hr/>
      <ul>
        {state.message.map( (msg, i) =>(
          <li key = {`m-${i}`}> {msg}</li>
        ))}
      </ul>
      <hr/>
      <button onClick={quit}>Close Down</button>
      <button onClick={clearMessage}>Clear Message</button>
    </div>
  )
}

export default ChatWindow 
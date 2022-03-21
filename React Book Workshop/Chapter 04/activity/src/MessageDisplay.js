import React,{Component} from "react";
import { fetchMessages } from "./AjaxLibrary";

class MessageDisplay extends Component{
  constructor(props){
    super(props);
    this.state = {
      loadingMessages : false,
      messages : []
    }
  }

  componentDidMount = async() =>{
    this.setState({loadingMessages:true})
    const messages = await fetchMessages(this.props.userId)
    this.setState({messages, loadingMessages: false})
    
  }

  render(){
    
    if(this.state.loadingMessages){
      return(
        <p>Messages still loading ....</p>
      )
    }
    else{
      if(this.state.messages.length > 0){
      return(
        <ul>
        {this.state.messages.map((msg, i)=>{
          return(
            <li key = {`m-${i}`}>{msg}</li>
          )
        })}
        </ul>
      )  
      
    }
    else{
      return(
        <p>no messages for you</p>
      )
    }
  }

}
}

export default MessageDisplay
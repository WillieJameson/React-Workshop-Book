import React,{Component} from 'react'
import "./App.css"

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      messages : [],
      loading : true
    }
  }

  renderprofile = () =>{
    if(this.state.loading){
      return<div>Loading .... </div>
    }
    if(this.state.messages && this.state.messages.length >0){
      return(
        <ul>
          {this.state.messages.map((message,Index)=> {
            return(
              <li key={`m-${Index}`}>{message}</li>
            )
          })}
        </ul>

      )
    }
    else{
      return (<div>No messages!</div>)
    }
  }

  componentDidUpdate = (prevprops,prevstate)=>{
    console.log('prevProps:', prevprops);
    console.log('prevstate:', prevstate);
  }

  componentDidMount = () =>{
    setTimeout(()=> this.setState({messages:[], loading : false}), 10000)
    
  }

  render(){
    return(
      <div className='App'>
        User profile
        <br/>
        {this.renderprofile()}
      </div>
    )
  }
}

export default App
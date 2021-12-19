import './App.css';
import React, {Component} from 'react'

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      showSecret: false
    }
  }

  secretMessage = () =>{
  if(!this.state.showSecret){return;}
    return(
      <div className='Secret-message'>
        I am the secret message !
      </div>
    )
  }

  toggleSecretMessage = () =>{
    this.setState({showSecret: !this.state.showSecret})
  }

  render(){
    return(
      <div className='App'>
        <button onClick={this.toggleSecretMessage}>
        Click to {this.state.showSecret ? "hide": "show"} the secret message ! </button>
        {this.secretMessage()}
      </div>
    )
  }
}

export default App;

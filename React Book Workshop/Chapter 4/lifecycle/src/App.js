import React, {Component} from 'react'
import "./App.css"

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      cycle : 0
    }
    setInterval(
      () => (this.setState({cycle: this.state.cycle + 1})),
      1000 
    )
    console.log("constructor")
  }

  componentDidMount = () =>{
    return(
      console.log("Component Did Mount")
    )
  }

  componentDidUpdate = () =>{
    return(
      console.log("Componenet Did update")
    )
  }

  render(){
    console.log("render")
    return(
      <div className='App'>
        Hello lifecycle: Cycle {this.state.cycle}
      </div>
    )
  }
}

export default App
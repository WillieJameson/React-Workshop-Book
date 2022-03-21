import React, {Component} from 'react'

const Greeting = props => <p>Hello {props.name}!</p>



class App extends Component{
  constructor(props){
    super(props);
    this.title = 'React App';
    this.state = {clickCounter : 0};
  }

  RenderClickCount(){
      return <p> You've click this button {this.state.clickCounter} </p>
  }

  render(){
    return(
      <div>
        <h1> {this.title} </h1>
        <br/>
        {this.RenderClickCount()}
        <Greeting name="User"/>
      </div>
    )
  }
}

export default App;

import React, {Component} from 'react'
import Message from './Message';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      list : [
        {id: 1, message : 'Hello'},
        {id: 2, message : 'Everyone'},
        {id: 3, message : 'What'},
        {id: 4, message : 'Is'},
        {id: 5, message : 'Up'}
      ]
    }
  }

  removeItem = (id) =>{
    const newlist = this.state.list.filter(item => item.id !== id )
    this.setState({list : newlist})
    console.log(newlist)
  }

  

  render(){
    return(
      <div className='App'>
        <h1>My list </h1>
        {this.state.list.map(item=>(
          <Message key={item.id} id={item.id} message={item.message} removeItem={this.removeItem}/>
          ))}
      </div>
    )
  }
}

export default App
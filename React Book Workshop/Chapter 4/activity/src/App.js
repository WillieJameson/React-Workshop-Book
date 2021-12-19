import React, {Component} from 'react'
import LoginDisplay from './LoginDisplay'
import UserCountDisplay from './UserCountDisplay'

class App extends Component{
  render(){
    return(
      <div className='App'>
        Messaging App 
        <UserCountDisplay/>
        <LoginDisplay/>
      </div>
    )
  }
}

export default App
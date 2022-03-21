import React, {Component} from 'react'
import Profile from './Profile'

const User = {
  name : 'Brian',
  interest : 'Reading, Swimming, Technology',
  age : '9',
  Image : "https://images.unsplash.com/photo-1470071131384-001b85755536?auto=format&fit=crop&w=200&q=80",
  color : "Red",
  movie : "Star Wars"
}

class App extends Component{
  render(){
    return(
      <Profile user = {User}/>
    )
  }
}

export default App
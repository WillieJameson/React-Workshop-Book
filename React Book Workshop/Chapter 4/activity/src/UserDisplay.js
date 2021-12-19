import React, {Component} from 'react'
import MessageDisplay from './MessageDisplay'

class UserDisplay extends Component{
  render(){
    if(!this.props.user){
      return null
    }
    else{
      return( 
        <div>
          logged in as {this.props.user.username} !
          <MessageDisplay userId = {this.props.user.id}/>
        </div>
      )
    }
  }

}

export default UserDisplay
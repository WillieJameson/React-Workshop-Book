import React,{ Component } from "react";
import { fetchUserCount } from "./AjaxLibrary";

class UserCountDisplay extends Component{
  constructor(props){
    super(props);
    this.state = {
      UserCount : 0,
      loadingUserCount : false,
    }
    
  }

  componentDidMount= async ()=> {
    this.setState({loadingUserCount: true})    
    const UserCount = await fetchUserCount();
    this.setState({UserCount, loadingUserCount : false})
  }

  render(){
    if(this.state.loadingUserCount){
      console.log("hello")
      return(
        <p>loading user count....</p>
      )
    }
    else{
      return(
        <p>users in this app: {this.state.UserCount}</p>
      )
    }    
  }
}

export default UserCountDisplay



import React,{Component} from 'react'
import { fetchUser } from "./AjaxLibrary";
import UserDisplay from './UserDisplay';


class LoginDisplay extends Component{
  constructor(props){
    super(props);
    this.state={
      loginUserName : null,
      loginLoading : false,
      user : null
    }
  }

  updateForm = (event) =>{
    const loginUserName = event.target.value;
    this.setState({loginUserName})
  }

  Login = async()=>{
    this.setState({loginLoading : true});
    const user = await fetchUser(this.state.loginUserName);
    this.setState({user, loginLoading : false})

  }

  Logout = () =>{
    this.setState({user: null})
  }

  LoginDisplayForm = () =>{
    if (this.state.loginLoading){
      
      return(
        <p>Trying to login please wait ....</p>
      )
    }
    else{
      if(!this.state.user){ 
        return(
          <div>
              Login Username : 
              <input type="text" onChange={this.updateForm} />
              <button onClick={this.Login} >login</button>
            </div>
        )
      }
      else{
        return(
          <button onClick={this.Logout}>Log out </button>
        )

      }
    }
    
  } 

  render(){
    return(
      <div>
        {this.LoginDisplayForm()}
        <hr/>
        <UserDisplay user={this.state.user}/>
      </div>
    )
  }

}

export default LoginDisplay
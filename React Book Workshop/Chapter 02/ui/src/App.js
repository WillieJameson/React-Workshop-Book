import React, {Component} from 'react'
import "./App.css";


class App extends Component{
  constructor(props){
    super(props);

    this.state ={
      username : '' , 
      password : '' ,
      passwordConfirmation : '' ,
      email :'',
      errors : []
    };

    // this.ValidateUserNameOnBlur = this.ValidateUserNameOnBlur.bind(this);
    // this.ValidatePasswordOnBlur = this.ValidatePasswordOnBlur.bind(this);
    // this.ValidateEmailOnBlur = this.ValidateEmailOnBlur.bind(this);

  }
    

  displayErrors=()=>{
    return(
      <div className='errors'>
      {this.state.errors.map(
        (err, i) => (<p key={`err-${i}`}>{err}</p>
      ))}
      </div>
    )
  }
  
  validateNotEmpty(fieldName, value){
    if (value.length <= 0) {
      return `${fieldName} must be filled out.`;
    }
  }
  

  submitForm(event){
    console.log("Submitting the form now...");
  }

  ValidatePasswordOnBlur=(event)=>{
    const Password = event.target.value;
    const errors = this.state.errors;
    errors.push(this.validateNotEmpty("Password",Password))
    this.setState({Password,errors})
  }

  ValidateUserNameOnBlur=(event)=>{
    const Username = event.target.value;
    const errors = this.state.errors;
    errors.push(this.validateNotEmpty("Username",Username))
    this.setState({Username,errors})
  }

  ValidateEmailOnBlur=(event)=>{
    const Email = event.target.value;
    const errors = this.state.errors;
    errors.push(this.validateNotEmpty("Email",Email))
    this.setState({Email, errors})
  }

  ValidateEmailFormat= (fieldName, value) =>{
    let [lhs,rhs] = value.split('@')
    lhs = lhs || '';
    rhs = rhs || '';
    if(lhs.length <= 0 || rhs.length <= 0 ){
      return `${fieldName} must be in a standard email format. `
    }
  }

  ValidatePasswordConfirmationOnBlur = (events) =>{
    const PasswordConfirmation = events.target.value;
    const errors = this.state.errors
    if (PasswordConfirmation !== this.state.Password){
      errors.push("Password must match password confirmation. ")
    }
  this.setState({PasswordConfirmation, errors})
  }


  displayForm(){
    return(
      <div>
        Username: <input type="text" onBlur={this.ValidateUserNameOnBlur}/><br/>
        Password: <input type="text" onBlur={this.ValidatePasswordOnBlur}/><br/>
        Password Confirmation: <input type="text" onBlur={this.ValidatePasswordConfirmationOnBlur}/><br />
        Email : <input type="text" onBlur={this.ValidateEmailOnBlur}/><br/>
        <br/>
        <button onClick={this.submitForm}>Submit</button>
      </div>
    )
  }

  
  

  render(){
    return(
      <div className='App'>
        Create Account
        {this.displayErrors()}
        <hr/>
        {this.displayForm()}
      </div>
    )
  }
}

export default App
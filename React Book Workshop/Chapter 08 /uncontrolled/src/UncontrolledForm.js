import React, { Component } from 'react';


class UncontrolledForm extends Component {
  constructor(props){
    super(props);

    this.name = null;
    this.password = null;

    this.setNameref = (element) =>{
      return this.name = element
    }

    this.setPasswordref = (element)=>{
      return this.password = element
    }
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    console.log(`A name was submitted :` + this.name.value);
    console.info('A password was submitted: ' + this.password.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} noValidate={true}>
      
        <label>
          Email:
          <input type="text" name="email" ref={this.setNameref}/>
        </label>
        <label>
          Password:
          <input type="password" ref={this.setPasswordref }/>
        </label>
        <input type="submit" value="Login"/>
      </form>
    );
  }
}

export default UncontrolledForm;
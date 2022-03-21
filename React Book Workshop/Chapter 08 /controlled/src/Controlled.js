// import React, { Component } from 'react';


// class ControlledForm extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       name : '',
//       password : ''
//     }

//   }

//   handleSubmit = (e) =>{
//     e.preventDefault();
//     alert('A name was submitted: ' + this.state.name)
//   }

//   handleOnNameChange = (e) =>{
//     this.setState({name : e.target.value})
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit} noValidate={true}>
      
//         <label>
//           Email:
//           <input type="text" value={this.state.name} onChange={this.handleOnNameChange}/>
//         </label>
//         <label>
//           Password:
//           <input type="password" ref={this.setPasswordref }/>
//         </label>
//         <input type="submit" value="Login"/>
//       </form>
//     );
//   }
// }

// export default ControlledForm;
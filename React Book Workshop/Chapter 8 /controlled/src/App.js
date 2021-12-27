import React, { Component } from 'react';
import ControlledForm from './Controlled.js';
import './App.css'
import { FormikForm } from './formikForm.js';

class App extends Component {
  render() {
    return (
      <div>
        <FormikForm/>
      </div>
      // <div>
      //  <ControlledForm/>
      // </div>
    );
  }
}

export default App;
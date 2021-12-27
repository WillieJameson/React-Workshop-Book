import React, { Component } from 'react';
import ConvertForm from './Component/ConvertForm.jsx';
import { StatusProvider } from './Component/StatusContext.js';
import './App.css'

class App extends Component {
  constructor(props){
    super(props);

    const defaultCelsius = 20;


    this.state = { 
      celsius : defaultCelsius,
      fahrenheit : this.getFahrenheit(defaultCelsius)
    }
  }

  getFahrenheit = (C) =>{
    return (
      parseInt((C * 9)/ 5 + 32)
    )
  }

  getCelsius = (F) =>{
    return(
      parseInt(((F - 32) * 5) / 9)
    )
  }

  convertTemperature = (ConvertTo, value) =>{
    return ConvertTo === 'celsius'
    ? {celsius: this.getCelsius(value), fahrenheit : parseInt(value)}
    : {celsius: parseInt(value), fahrenheit: this.getFahrenheit(value)};
  }

  UpdateTemperature = (ConvertTo, value = 0) =>{
    this.setState( ()=>{
      if(value === '' || value ==='-'){
        const returnValue = value  === '-' ? '-' : '';

        return{
          celsius: returnValue,
          fahrenheit : returnValue
        }
      }

      return this.convertTemperature(ConvertTo, value)
    }

    )
  }

  render() {
    return (
      <div className='container'>
      <StatusProvider value={this.state.celsius}>
        <h1>Temperature Converter</h1>
        <ConvertForm
          temperature={this.state}
          UpdateTemperature = {this.UpdateTemperature}
        />
        </StatusProvider>
      </div>
    );
  }
}

export default App;
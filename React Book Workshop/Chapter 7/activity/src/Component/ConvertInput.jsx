import React, { Component } from 'react';

class ConvertInput extends Component {
  handleTemperature = (event) =>{
    // take the "value" tag from the <input ..... />
    const {value} = event.target

    this.props.UpdateTemperature(this.props.convertTo, value)
  }
  render(){
    const {convertTo, temperature} = this.props
    return (
      <div>
        <span>{convertTo === 'celsius' ? 'Fahrenheit:' : 'celsius:'}</span>
        <input type="number" name="temperature" value={temperature} onChange={this.handleTemperature}  />
      </div>
    );
  }
}

export default ConvertInput;
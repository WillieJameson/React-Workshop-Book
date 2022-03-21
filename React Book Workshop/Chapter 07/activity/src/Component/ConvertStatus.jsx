import React, { Component } from 'react';
// import { StatusConsumer } from './StatusContext';

class ConvertStatus extends Component {
  Status = value =>{
    if (value > 50) {
      return 'Very hot';
    } else if (value > 30) {
      return 'Hot';
    } else if (value > 15) {
      return 'Warm';
    } else if (value > 0) {
      return 'Cool';
    } else if (value > -10) {
      return 'Cold';
    } else if (value <= -10) {
      return 'Very cold';
    }
  }
  render() {
      // return <StatusConsumer>{props => <div className="status">Status: {getStatus(props)}</div>}</StatusConsumer>;
     const {CelsiusValue} = this.props
    return (
      <div>
        status : {this.Status(CelsiusValue)}
      </div>
    );
  }
}

export default ConvertStatus;
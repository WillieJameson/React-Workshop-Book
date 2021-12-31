import React, { Component } from 'react';

class App extends Component {
  inputRef;
  render() {
    return (
      <div>
        <input type='file' hidden={true}
        ref={(refParam) => this.inputRef = refParam}
        />
        <button 
        onClick={()=> this.inputRef.click()}
        style={{ backgroundColor: "gray", color: "white" }}>
          Upload document
        </button>
      </div>
    );
  }
}

export default App;
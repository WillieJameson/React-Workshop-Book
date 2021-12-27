import React, { Component } from 'react';
import "./App.css"

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      photo : "",
      Download : 0,
      Views: 0,
      Likes: 0
    }
  }

  render() {
    return (
      <div className='page' style={{backgroundImage : `url${this.state.photo}`}}>
        <div className='Box'>
          <h1>Get a Random Photo</h1>

          <button>Random photo</button>

          <h2>Statistics</h2>

          <div className='container'>
            <div>
              <h3>Downloads</h3>
              <p>{this.state.Download}</p>
            </div>
            <div>
              <h3>Views</h3>
              <p>{this.state.Views}</p>
            </div>
            <div>
              <h3>Likes</h3>
              <p>{this.state.Likes}</p>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
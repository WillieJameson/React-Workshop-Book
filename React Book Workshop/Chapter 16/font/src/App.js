import React, { Component } from 'react';
import './App.css'
import FontList from './fontlist.js'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      sort : 'popularity'
    }
  }

  handleClick = (sort) =>{
    this.setState({sort})
  }
  
  render() {
    // console.log(this.state)
    return (
      <div className='container '>
      <div>
        <button
          className='card_button'
          onClick={()=>{
            this.handleClick('popularity')
          }}
        > 
          Popularity
        </button>
        <button
          className='card_button'
          onClick={()=>{
            this.handleClick('trending')
          }}
        >
          Trending
        </button>
      </div>
      <FontList sort= {this.state.sort}/>
    </div>
    );
  }
}


export default App

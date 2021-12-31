import React, { Component } from 'react';
import axios from 'axios'
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

  RandomPhoto = () =>{
    axios.get('https://api.unsplash.com/photos/random',{
      headers : {
        Authorization: 'Client-ID FzESeR91Tve7p8Tx1Ekm2bnuRVKFkftZ7sf4cB85ZgA'
      }
    })
    .then((res) =>{
      // console.log(res)
      this.setState({
        photo : res.data.urls.full
      })

      const photoID = res.data.id

        axios.get(`https://api.unsplash.com/photos/${photoID}/statistics`,{
        headers : {
          Authorization: 'Client-ID FzESeR91Tve7p8Tx1Ekm2bnuRVKFkftZ7sf4cB85ZgA'
        }
      })
      .then(res=>{
        // console.log(res)
        this.setState({
          Download: res.data.downloads.total,
          Views: res.data.views.total,
          Likes: res.data.likes.total
        })
      })

    })

    
  }



  render() {
    return (
      <div className='page' style={{backgroundImage : `url(${this.state.photo})`}}>
        <div className='Box'>
          <h1>Get a Random Photo</h1>

          <button onClick={this.RandomPhoto}>Random photo</button>

          <h2>Statistics</h2>

          <div className='container'>
            <div>
              <h3>Downloads</h3>
              <p>{this.state.Download.toLocaleString()}</p>
            </div>
            <div>
              <h3>Views</h3>
              <p>{this.state.Views.toLocaleString()}</p>
            </div>
            <div>
              <h3>Likes</h3>
              <p>{this.state.Likes.toLocaleString()}</p>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
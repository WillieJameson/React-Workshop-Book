
import React from 'react';
import './App.css';
//data
import comments from "./comment.json";
//component 
import CommentSection from './CommentSection';

function App() {
  return (
    <div className="App">
      <CommentSection Content={comments}/>
    </div>
  );
}

export default App;

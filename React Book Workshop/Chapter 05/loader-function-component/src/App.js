import Loader from './Loading';
import React from 'react'
import './App.css';

function App() {
  return (
    <div className="App">
    <Loader spinnerSize={60} isVisible={true}/>
    </div>
  );
}

export default App;

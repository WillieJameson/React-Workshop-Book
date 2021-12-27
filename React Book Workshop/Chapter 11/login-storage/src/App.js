import React from 'react'
import './App.css';

const App =()=> {
  let [loggedIn, setLoggedIn] = React.useState(false)

  React.useEffect(() => {
    localStorage.setItem("loggedIn", loggedIn);
  }, [loggedIn]);

  React.useEffect(() => {
    const loggedInFromLocalStorage = localStorage.getItem("loggedIn");
    console.log(loggedInFromLocalStorage)
    if (JSON.parse(loggedInFromLocalStorage) === true) {
      return    setLoggedIn(true);
    }
  }, []);
  
  return (
    <div className="App">
    <p>Logged Out</p>
    <button onClick={() => setLoggedIn(!loggedIn)}>
      {loggedIn ? "Log out" : "Log in"}
    </button>
    </div>
  );
}

export default App;

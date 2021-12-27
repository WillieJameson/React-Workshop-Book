import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Homepage = () =>{
  return(
    <div>
      <h1>Home page</h1>
      <hr/>
      <p>This is our homepage.</p>
    </div>
  )
}
const About = () =>{
  return(
    <div>
    <h1>About page</h1>
    <hr/>
    <p>Information about your app or who you are would go there.</p>
  </div>
  )
  }

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path = "/about">
          <About/>
        </Route>
        <Route>
          <Homepage/>
        </Route>
      </Switch>
    </Router>

    // <div>
    //   <h1>About page</h1>
    //   <hr/>
    //   <p>Information about your app or who you are would go here. </p>
    // </div>
  )
}


export default App
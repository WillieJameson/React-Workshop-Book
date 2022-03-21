import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch} from 'react-router-dom';

const Homepage = () => (
  <div className="Homepage">
    <h1>Homepage</h1>
    <hr />
    <p>This is our homepage.</p>
  </div> 
);




const Bio = () =>{
  return(
    <div>
      <h2>Bio</h2>
      <hr/>
      <p>I'm a pretty cool person.</p>
    </div>
  )
}

const Contact = () =>{
  return(
    <div>
    <h2>Contact me</h2>
    <hr/>
    <p>Send me an email at test@test.com</p>
  </div>
  )

}

const About = () =>{
  const {path ,url} = useRouteMatch();
  return(
  <Router>
    <div>
      <h1>About page</h1>
      <hr/>
      <p>Information about your app or who you are would go there.</p>
      <hr/>
      <Link to={`${url}`}>About Home</Link>
      &nbsp;
      <Link to={`${url}/contact`}>Contact</Link>
      &nbsp;
      <Link to={`${url}/bio`}>Bio</Link>
      <Switch>
        <Route path={`${path}/contact`}>
          <Contact/>
        </Route>
        <Route path={`${path}/bio`}>
          <Bio/>
        </Route>
      </Switch>
      <hr/>
    </div>
  </Router>

  )
}


const Navbar = () =>{
  return(
    <div>
      <Link to ="/"> Home </Link>
      &nbsp;
      <Link to="/about">About</Link>
    </div>
  )
}

const App =() => {
  return (
    <Router>
      <Navbar/>
    <Switch>
    <Route exact path="/">
      <Homepage />
    </Route>
    <Route path="/about">
      <About />
    </Route>
    <Route path="*">
      <h1>404 - Component Not Found</h1>
      <a href='/'>Return Home </a>
    </Route>
    </Switch>
  </Router>
  )
}

export default App

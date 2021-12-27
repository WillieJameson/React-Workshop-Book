import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from 'react-router-dom'
import './App.css'


const Dashboard = () =>{
  const {path,url} = useRouteMatch();

  return(
    <div className="row">
      
      <Router>  
      <div className="sidebar">
          Sidebar
      </div>
      <div className="main">
      <div className="navbar">
          <Link to={`${url}/map`}>Map</Link>
        </div>
        </div>
        <Switch>
          <Route exact path={path}>
            <h3>Please select a widget.</h3>
          </Route>
          <Route path={`${path}/:widgetName`}>
            <Widget />
          </Route>
        </Switch>
      </Router>
      
    </div>
  )
}

const Widget = () =>{
  let {widgetName} = useParams();
  return(
    <div>
      <h3>Widget : {widgetName}</h3>
    </div>
  )
}

const Home = () =>{
  return(
    <h3>Home Page</h3>
  )
}

const App =()=> {
  return (
    <div className="App">
      <Router>
      <div className="navbar">
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
        </div>

        <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
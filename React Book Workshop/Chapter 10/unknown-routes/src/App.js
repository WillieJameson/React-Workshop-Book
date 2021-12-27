import React from 'react'
import {
  BrowserRouter as Router,
  Link,
  Route,
  useLocation,
Switch,
  Redirect
} from 'react-router-dom';


const Page1 = () =>{
  return <h3>Page1</h3>
}

const Page2 = () =>{
  return <h3>Page2</h3>
}

const Page3 = () =>{
  let param = new URLSearchParams(useLocation().search);
  // param=123
  return <h3>Page3 {param ? `${param}` : ''}</h3>
}

const NoMatch = () =>{
  return <h3> 404 sorry!</h3>
}

const App = ()=> {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Page 1</Link>
        </li>
        <li>
          <Link to='/page2'>Page 2</Link>
        </li>
        <li>
          <Link to='/page3?param=123'>Page 3</Link>
        </li>
        <li>
          <Link to="/page4">Page 4</Link>
        </li>
        <li>
        <Link to="/ajkdbajdjlasndla">Page 5</Link>
      </li>
      </ul>
      <Switch>
        <Route exact path="/">
          <Page1 />
        </Route>
        <Route path="/Page2">
          <Page2 />
        </Route>
        <Route path="/Page3">
          <Page3 />
        </Route>
        <Route path="/404">
          <NoMatch />
        </Route>
         <Redirect to="/404" />
        </Switch>
    </Router>
  )
}
// redirect , is the same as default: in switch javascript
export default App
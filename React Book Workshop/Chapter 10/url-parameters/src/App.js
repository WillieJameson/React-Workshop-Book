import React from 'react'
import {
  BrowserRouter as Router,
  Link,
  Route,
  useParams,
  Switch,
} from 'react-router-dom';

const Page1 = () =>{
  return <h3>Page 1</h3>
}

const Page2 = () =>{
  let {id} = useParams();
  return <h3> ID : {id}</h3>
}

const Page3 = () =>{
  let {name} = useParams();
  return <h3>Hello { name ? `${name}` : 'stranger'}</h3>
}

const Page4 = () =>{
  let {first,last} = useParams();
  return <h3>First : {first}, Last : {last}</h3>
}

//

const App =()=> {
  return (
    <Router>
    <div>
      <h2>Pages</h2>
      <ul>
        <li>
          <Link to="/">Page1</Link>
        </li>
        <li>
          <Link to="/name">Page2</Link>
        </li>
        <li>
          <Link to="/path/Theo">Page3</Link>
        </li>
        <li>
          <Link to="/path/">Page3 Missing Param</Link>
        </li>
        <li>
          <Link to="/path/theo/despoudis">Page4</Link>
        </li>
      </ul>
    </div>
    <Switch>
      <Route exact path="/">
        <Page1 />
      </Route>
      <Route exact path="/:id">
        <Page2 />
      </Route>
      <Route exact path="/path/:name">
        <Page3 />
      </Route>
      <Route path="/path/:first/:last">
        <Page4 />
      </Route>
    </Switch>
    </Router>
  )
}

export default App

//  /search?q=animals&c=cats case

// const params = new URLSearchParams(useLocation().search)
// params.get('q') // "animals"
// params.get('c') // "cats"

//another case

//const params = new URLSearchParams("?q=cats&q=dogs")
//params.getAll('q') // (2) ["cats", "dogs"]
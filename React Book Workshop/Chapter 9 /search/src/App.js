import React from 'react'
import {
BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from 'react-router-dom';


const Homepage = () => (
  <div className="Homepage">
    <h1>Homepage</h1>
    <hr />
    <p>This is our homepage.</p>
  </div> 
);

const Search = props =>{
  const query = new URLSearchParams(useLocation().search);
  const term = query.get('q')
  const returned = doSearch(term)
  return(
    <div>
      <h1> Search page</h1>
      <hr/>
      Found results for {term};
      <ul>
        {returned.map(t =>(
          <li key ={t}>{t}</li>
        ))}
      </ul>
    </div>
  )
}

const Items = [
  'Lorem Ipsum',
  'Ipsum Dipsum',
  'Foo Bar',
  'A little black cat',
  'A lazy fox',
  'A jumping dog'
];

const doSearch = term =>{
  if(!term){
    return {Items}
  }
  // return(
  //   console.log(Items[0].toLowerCase().indexOf("ipsum".toLowerCase()))
  // )
  
  return Items.filter(
    
    item => item.toLowerCase().indexOf(term.toLowerCase()) !== -1
  )
}

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/search">
          <Search/>
        </Route>
        <Route>
          <Homepage/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

let Inventory = [
  { id: 1, name: "Shoes", description: "Some shoes you can buy" },
  {
    id: 2,
    name: "Backpack",
    description: "This backpack can fit so much inside of it"
  },
  {
    id: 3,
    name: "Travel Mug",
    description: "A travel mug. Fill it with liquids!"
  }
];


const MyStore = () =>{
  const {path ,url} = useRouteMatch();
  return(
  <Router>
    <div>
      <h2>Item for sale</h2>
      <hr/>
      <Switch>
        <Route  exact path ={`${path}`}>
        {Inventory.map(i =>{
          return(
            <ItemDetail key={`is-${i.id}`} {...i} baseURl = {url}/>
          )
        })}
        </Route>
        <Route path={`${path}/items/:itemId`}>
          <Item/>
        </Route>
        <Route path="*">
            <h2>We're sorry, we could not find that item in our store!</h2>
          </Route>
      </Switch>
    </div>
  </Router>

  )
}



const ItemDetail = (props) =>{
  return(
    <div key={`item-${props.id}`}>
      <Link to={`${props.baseURl}/items/${props.id}`}>{props.name}</Link>
    </div>
  )
}

const Item = () =>{
  let {itemId} = useParams();
  const [item] = Inventory.filter(i => i.id.toString() === itemId)  
  if(item){
    return(
      <div>
          <p>
            <strong>id: {item.id}</strong>
          </p>
          <p>
            <strong>name: {item.name}</strong>
          </p>
          <p>
            <strong>description: {item.description}</strong>
          </p>
      </div>
    )
  }
  else{
    return(
      <h1>We're sorry, we could not find that item in our store!</h1>
    )
  }
  
}

const Home = () =>{
  return(
    <h1>Welcome to my app !</h1>
  )
}


function App() {
  return (
    <Router>
      <div>
        <h1>My Store</h1>
        <hr/>
        <Link to="/">Home</Link>
        &nbsp;
        <Link to="/store">Store</Link>
        <hr />
      </div>
      <Switch>
        <Route exact path ="/">
          <Home/>
        </Route>
        <Route path="/store">
          <MyStore/>
        </Route>
        <Route path="*">
          <h1>We're sorry, we couldn't find that page !</h1>
        </Route>
      </Switch>
    </Router>

  );
}

export default App;

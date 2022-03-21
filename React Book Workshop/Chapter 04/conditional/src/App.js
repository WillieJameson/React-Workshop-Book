import React ,{ Component } from "react";
import "./App.css"
import LifeCycleTest from "./LifeCycleTest.js";

class App extends Component{
  render(){
    return(
      <div>
        Hello Conditional
          {true && <LifeCycleTest/>}
      </div>
    )
  }
}

export default App
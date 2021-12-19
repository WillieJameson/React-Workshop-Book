import React,{Component} from 'react'

class LifeCycleTest extends Component{
  constructor(props){
    super(props);
    console.log('LifeCycle Constructor')
  }

  render(){
    return(
      <p>I only show up if the conditional is true</p>
    )
  }
}

export default LifeCycleTest
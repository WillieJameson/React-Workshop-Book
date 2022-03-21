import React from 'react'

const About = () =>{
  return(
    <div>
    <h1>About page</h1>
    <hr/>
    <p>Information about your app or who you are would go there.</p>
  </div>
  )

}

const Route = path =>{
  // console.log(path
  // .split('/')
  // .map(p => p.toLowerCase())
  
  // .slice(1))
  
  const paths = path
  .split('/')
  .map(p => p.toLowerCase())
  // takes the rest of the array besides the first array(path[0])
  .slice(1)
switch (paths[0]){
  case 'about' :
    return <About/>
  //return ->
  default:
  return <div className='Default'>Default Router</div>
}
}


const App = ()=> {
  return (
    <div>
      <h1>Example Router</h1>
      <hr/>
      <p>href : {window.location.href}</p>
      <p>path : {window.location.pathname}</p>
      <hr/>
      {Route(window.location.pathname)}
    </div>
  )
}


export default App
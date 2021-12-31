// import React, { Component } from 'react';

// class App extends Component {
//   divRef = React.createRef()

//   render() {
//     return (
//       <div
//       ref={this.divRef}
//       onClick={ () =>(
//         console.log(this.divRef.current.getBoundingClientRect())
//       )}
//       style={{ width: 80, height: 20, border: "4px solid black" }}
//       />
//     );
//   }
// }

// export default App;

import React from 'react'

const App = () => {
  const divRef = React.useRef()

  return (
    <div
    ref = {divRef}
    onClick={ () =>{
      return(
        console.log(
          divRef.current.getBoundingClientRect()
        )
      )
    }}
    style={{ height: 20, width: 80, border: "4px solid black" }}
  />
  )
}

export default App

// import React, { Component } from 'react';
// import axios from 'axios'
// const API_KEY = `AIzaSyAe2TQTHMB-ktELx4UOYy6pFdkbJNou9sE`

// class FontList extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       fonts: []
//     };
//   }


//   getFonts =async () =>{
//    //Fetch data
//    const res = await axios.get(`https://www.googleapis.com/webfonts/v1/webfonts?key=${API_KEY}&sort=${this.props.sort}`)

//    // update state
//    this.setState({
//      fonts: res.data.items.slice(0,10)
//    })

//   }

  
//     componentDidMount = () =>{
//     this.getFonts()
//   }

//    componentDidUpdate = async(prevProps) =>{
//     if (prevProps.sort !== this.props.sort){
//       this.getFonts()
//     }
//   }
  
//   render() {
//     // console.log(this.props.sort)
//     return (
//       <div className='card'>
//         {this.state.fonts.map((fonts,index)=>(
//           <a
//             href={`https://fonts.google.com/specimen/${fonts.family.replace(
//               ' ',
//               '+'
//             )}`}
//             className='card__item'
//             key={index}
//           >
//             {fonts.family}
//           </a>
//         ))}
//       </div>
//     );
//   }
// }

// export default FontList;


import React from 'react';
import useFonts from './useFonts';


const FontList = (props) =>{
  const Fonts = useFonts(props.sort)

  return (
    <div className='card'>
      {Fonts.map((fonts,index)=>(
        <a
          href={`https://fonts.google.com/specimen/${fonts.family.replace(
            ' ',
            '+'
          )}`}
          className='card__item'
          key={index}
        >
          {fonts.family}
        </a>
      ))}
    </div>
  );
} 

export default FontList
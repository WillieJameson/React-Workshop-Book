import React,{Component} from 'react'
import Product from './Product.json'
import Productlist from './Component/Productlist/Productlist.js'
import "./App.css"
import Tags from './Component/Tags/Tags.js'

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      selected : null
    }
  }

  SelectedHandler = (event) =>{
    this.setState({selected : event})
  }


  render(){
    const {products,ingredients} = Product
    
    return(
      <div className='container'>
        <h1>Products</h1>
        <Tags ingredients={ingredients} selected={this.state.selected} handler ={this.SelectedHandler} />
        <Productlist products={products} selected={this.state.selected}/>
      </div>
    )
  }
}

export default App
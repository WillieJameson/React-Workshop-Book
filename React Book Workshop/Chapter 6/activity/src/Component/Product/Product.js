import React,{Component} from "react";
import "./Product.css"

class Product extends Component{
  constructor(props){
    super(props);
    this.state = {
      showDesc : false
    }
  }

  ToggleShow = () =>{
    this.setState({showDesc: !this.state.showDesc})
  }

  


  render(){
    const {product} = this.props

    return(
      <div className="Product">
        <div className="Header">
          <h2>{product.name}</h2>
          <div>
            <button onClick={this.ToggleShow}>
            {this.state.showDesc ? "-" : "+"}</button>
          </div>
        </div>
        <strong>$ {product.price}</strong>
        <div>{this.state.showDesc ? product.summary : "" }</div>
      </div>
    )
  }

}

export default Product
import React,{Component} from 'react'
import Product from '../Product/Product.js';


class Productlist extends Component{
  

  render(){
    const {products, selected} = this.props;
    const Filter = () =>{
      if(selected){
        return products.filter(product => product.tags.includes(selected))
      }
      else{
        return products
      }
    }
    
  
    return(
      
      <div>
        {Filter().map((product,i) => {
          return(
            <Product product={product} key={`P-${i}`}/>
          )
       })}
      </div>
    )
  }
}

export default Productlist
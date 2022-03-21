import React, {Component} from 'react'

const Header = props => <h1>{props.Title}</h1>

const InventoryItem = props =>(
  <div>
    <strong>{props.itemsName}</strong>
    <hr/>
    <div>{props.price}</div>
  </div>
)

class App extends Component{
  constructor(props){
    super(props);

    this.state ={
      items : [
        {itemsName: "shoes" , price : 5},
        {itemsName: "Sock", price: 3 }
      ]
    }
  }
  render(){
    return(
      <div>
        <Header Title="Buystuff"/>
        <InventoryItem 
        itemsName ={this.state.items[0].itemsName} 
        price ={this.state.items[0].price} 
        />
        <InventoryItem
        itemsName = {this.state.items[1].itemsName}
        price = {this.state.items[1].price}
        />
      </div>
    )
  }
} 

export default App;



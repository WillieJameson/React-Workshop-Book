import React,{Component} from "react";
import Tag from "../../Tag /Tag.js";

class Tags extends Component{
  render(){
    const{ingredients,selected,handler} = this.props

    return(
      <div>
        Select Filter 
        {ingredients.map((ingredients,i)=>{
          return(
            <Tag handler={handler} selected={selected} key={`Tag-${i}`}>
            {ingredients}
            </Tag>
          )
        })}
      </div>
    )
  }
}

export default Tags
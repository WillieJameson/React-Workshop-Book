import React,{Component} from "react";
import "./tag.css"

class Tag extends Component{
  render(){
    const{selected,handler} = this.props
        
    return(
      <button className={`tag ${selected === this.props.children ? "active" : ""}`}
      onClick={()=> handler(this.props.children)}>
        {this.props.children}
      </button>
    )
  }
}

export default Tag
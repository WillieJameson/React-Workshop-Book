import React,{Component} from 'react'
import "./Modal.css"

class Modal extends Component{
  render(){
    const{showModal,toggleModal} = this.props
    if (!showModal) {
      return null 
    }
    else{
      return (
        <div className="modal">
          <div className="modal_content">
            {this.props.children}
            <div>
            <button onClick={toggleModal}>Close</button>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Modal
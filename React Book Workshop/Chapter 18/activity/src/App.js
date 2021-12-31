import React, { Component } from 'react';
import ReactDOM from "react-dom";
import "./App.css"

const Modal = (props) =>{
  return(
    <div className='Modal'>
      {props.children}
    </div>
  )
}

export class ModalOverlay extends Component {
  
  render() {
    const { showModal, onCloseHandler,mountingPoint } = this.props;
    const mountingPointPortal = mountingPoint || document.querySelector("body")

    if(showModal){
      //can't scroll
      mountingPointPortal.style.overflowY = "hidden";
      //
      const ModalPortal =(
          <div className='ModalOverlay'>
            <Modal>
              {React.Children.map(this.props.children, 
                child => React.cloneElement(child, {onClick :onCloseHandler} ) )}
            </Modal>
          </div>
        )

      return ReactDOM.createPortal(ModalPortal,mountingPointPortal)
    }

    else{
      mountingPointPortal.style.overflowY = "scroll";
      return null
    }

    
  }
}




class App extends Component {
  viewPort = React.createRef()

  state = {
    showModal : false
  }

  OnclickFunc = () =>{
    this.setState({
      showModal : !this.state.showModal
    })
  }

  render() {
    return (
      <div className='App'>
        <button onClick={this.OnclickFunc}>Show Modal</button>

        <div ref={this.viewPort} className="Viewport">
          Lorem Ipsum
        </div>

        <ModalOverlay
          onCloseHandler={this.OnclickFunc}
          mountingPoint={this.viewPort.current}
          showModal={this.state.showModal}
        >
        <div>
          <h3>This is the modal content! :)</h3>
          <button>Close!</button>
        </div>
        
        </ModalOverlay>

      </div>
    );
  }
}

export default App;
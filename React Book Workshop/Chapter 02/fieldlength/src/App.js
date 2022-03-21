import React, {Component} from 'react'

class App extends Component{
  constructor(props){
    super(props);
    this.state ={
      input : "",
      submitDisabled : true
    }
    
  }

  UpdateForm=(event)=>{
    console.log(this.state)
    const input = event.target.value;
    this.setState({input}, ()=>{
      this.ValidateLength()
      //function ini buat activate sih ValidateLength tiap kali ada changes di textarea 
      //atau alternativenya masukin function Validatelength ke dalam function updateForm abis itu bikin variable abis itu panggil jadi this.setState({input}, ValidateLength)
    })
  }

  ErorMessage = () =>{
    if(this.state.submitDisabled === true){
      return <p> Must be at least 100 characters </p>
    }
  }

  ValidateLength = () =>{
    if(this.state.input.length > 100){
      return this.setState({submitDisabled: false})
    }
    else if(this.state.input.length <= 100){
      return this.setState({submitDisabled: true})
    }
  }
  

  ReturnWordsCount=()=>{
    return<p>{`${this.state.input.length} character`}</p>
  }

  Submit = ()=>{
    alert("Submit the form ?")
  }

  render(){
    return(
      <div>
      
      <h2>Blog Post Writer</h2>
      <hr/>
      <h3>Write your post here</h3> <br/>
      {this.ErorMessage()}
      <textarea rows="20" cols="100" onChange={this.UpdateForm} />
      <br/>
      {this.ReturnWordsCount()}
      <br/>
      <button disabled={this.state.submitDisabled} onClick={this.Submit}>Submit</button>
      </div>
    )
  }

}

export default App
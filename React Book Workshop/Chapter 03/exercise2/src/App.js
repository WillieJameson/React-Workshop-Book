import React,{Component} from 'react'
import './App.css'

class App extends Component{
  constructor(props){
    super(props);
    this.state= {
      playerScore: 0, 
      question:[
        {
          question: "What animal barks?",
          possibleAnswers: ["Dog", "Cat"],
          rightAnswer: "Dog",
          playerChoice: null
        },
        {
          question: "What animal is more closely related to a tiger?",
          possibleAnswers: ["Dog", "Cat"],
          rightAnswer: "Cat",
          playerChoice: null
        },
        {
          question: "What animal is more closely related to a wolf?",
          possibleAnswers: ["Dog", "Cat"],
          rightAnswer: "Dog",
          playerChoice: null
        },
        {
          question: "What animal is best known for playing fetch?",
          possibleAnswers: ["Dog", "Cat"],
          rightAnswer: "Dog",
          playerChoice: null
        }
      ]
    }
  }

  displayQuestion = (index) =>{
    // show nothing if playerscore is under the index
    if(this.state.playerScore < index) {return}
    const question = this.state.question[index];
    return(
      <div className='question-display' key={`q-${index}`}>
        <p className='question'>
          {question.question}
        </p>  
        <br/>
        { question.possibleAnswers.map((answer, answerIndex) => (
          <button key={`q-${index}-a-${answerIndex}`} className="question-choice" onClick={() => this.answerQuestion(index, answer)}>
            {answer}
          </button>
        ))
      }
         <br/>
          {this.displayResult(index)}
      </div>
    )
  }

  displayResult(index){
    const question = this.state.question[index]
    if(!question.playerChoice){return;}
    if(question.playerChoice === question.rightAnswer){
      return(
        <p className='result-correct'>
          Your answer is correct
        </p>
      )
    }
    else{
      return(
        <p className='result-incorrect'>
        Your answer is incorrect
        </p>
      )
    }
  }

  answerQuestion = (index,choice) =>{
    const answeredQuestion = this.state.question[index];
    answeredQuestion.playerChoice = choice
    const Allquestion = this.state.question;
    Allquestion[index] = answeredQuestion;
    this.setState({
      question : Allquestion},()=>{
        this.UpdatePlayerScore()
    })
  }

  UpdatePlayerScore = () =>{
    const playerScore = this.state.question.filter(q=>q.rightAnswer === q.playerChoice).length;;
    this.setState({playerScore});
    console.log("New player score:", playerScore)
  }

  renderQuestion = () =>{
    return (
      this.state.question.map((question,index)=>
      this.displayQuestion(index))
    )
  }



  render(){
    return(
      <div className='App'>
        <h1>Quiz show !</h1>
        <hr/>
        {this.renderQuestion()}
      </div>
    )
  }
}

export default App
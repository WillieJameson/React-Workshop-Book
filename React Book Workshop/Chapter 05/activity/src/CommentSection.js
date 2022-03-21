import React,{Component} from 'react' 
import Comment from './Comment';
import "./Section.css"

class CommentSection extends Component{

  

  render(){
    

    const {Content} = this.props;
    
    if(!Content.comments){
      return null
    }
    else{
      return(
        <div className='Section'>
          <h1>Comments</h1>
          {Content.comments.map((comments,key)=>(
            <Comment comments = {comments} key = {`C-${key}`} status={"Parents"}/>
          ))}
        </div>
      )
    }
    
  }
}

export default CommentSection
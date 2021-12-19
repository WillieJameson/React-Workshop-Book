import React,{Component} from 'react' 
import "./comment.css"


class Comment extends Component{

  

  render(){
    const {comments,status} = this.props;

    return(
      <div className='Comment'>
      <div className='CommentContainer'>
        <img className="image" src={comments.image} alt={comments.name}/>
        <div className='Comment-Content'>
          <p className='name'>{comments.name}</p>
          <strong className='time'>{comments.time}</strong>
          <p className='text'>{comments.text}</p>
          {status === "Parents" && <button className='button'>Reply</button>}
        </div>
      </div>
      {comments.comments&&
        comments.comments.map((content,key)=>(
          <Comment key={`C-${key}`} comments={content}/>
        ))

      }
    </div>
    )
  }
}


export default Comment 
class  ChatService{
  interval = null
  subscribe = fn =>{
    console.log("Joining the service");
    this.interval = setInterval( () =>{
      fn("ping")
    }, 1000)
  }

  unsubscribe = () =>{
    console.log("Quitting the service")
    clearInterval(this.interval)
  }
}

export default ChatService
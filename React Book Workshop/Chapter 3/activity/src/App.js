import "./App.css"
import React,{Component} from 'react'

const Tile_Count = 12;

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      tile : [],
      clicks : 0,
      lastFlipped : null
    }
  }

  ResetGame= () =>{
    let tile = []
    // ini buat show number 
    let number = 0 

    for (let i = 0; i < Tile_Count; i++) {
      number ++

      let TileOne = {matched: false, flipped : true , number} ;
      let TileTwo = {matched: false, flipped : true , number} ;

      tile = [...tile,TileOne,TileTwo]
    }


      for (let i = 0; i < tile.length ; i++) {
      const j = Math.floor(Math.random() * tile.length);
      [tile[i], tile[j]] = [tile[j], tile[i]]
    }
    
  
    this.setState({tile})
  }


  FlipMatched = (tiles) =>{
    // sort it and check if it is matched. If it is not flipped it back 
    tiles.forEach(tile => {
      if(!tile.matched){
        tile.flipped = true
      }
    });

    return(tiles)

  }

  FlipTile = (index) =>{

    
    // make a variable 
    
    let tiles = this.state.tile
    // tile variable defines tiles index
    let tile = tiles[index]
    
    let lastFlipped = this.state.lastFlipped

    let clicks = this.state.clicks + 1

    if(lastFlipped === null){
      tiles = this.FlipMatched(tiles);
      tile.flipped = !tile.flipped;
      lastFlipped = index;
      
    }
    else {
      // Flip the current tile over
      tile.flipped = !tile.flipped;
      // Grab the last flipped tile using the index
      let lastFlippedTile = this.state.tiles[lastFlipped];
      if (lastFlippedTile.number === tile.number) {
        // The numbers match, so let's update the state of both tiles to matched: true!
        lastFlippedTile.matched = true;
        tile.matched = true;
        // And update the list of tiles we'll use later in setState
        tiles[lastFlipped] = lastFlippedTile;
      }
      // We've flipped two cards, so there is no more "previous" card to match against
      lastFlipped = null;
    }

    // And update the current tile
    tiles[index] = tile;
    


    this.setState({tiles, clicks,lastFlipped})

  }

  ReturnCard = (tile,index) =>{


    let flipped = () => {
      if(tile.flipped){
      return ("flipped")
    }
  }
    let matched = () => {
      if(tile.matched){
      return ("matched")
    }
  }
    return(
      <div key={`tile-${index}`} className={`Tile ${flipped()} ${matched()}`} 
      onClick={ ()=> this.FlipTile(index) }>
        {!tile.flipped && tile.number}
      </div>
    )
  }


  render(){
    return(
      <div>
        <h1>Memory Game</h1>
        <strong>Clicks : {this.state.clicks}</strong>
        <br/>
        <button className="reset" onClick={this.ResetGame}>New Game</button>
        <hr/>
        {this.state.tile.map((tile,index)=>
          this.ReturnCard(tile,index)
        )}
      </div>
    )
  }


}


export default App

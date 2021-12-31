import React, { useState } from 'react'
import "./App.css"
import axios from 'axios'
import Movie from './Movie'

const App = () => {
  const [Movies, setMovies] = useState([])
  const [Credits, setCredits] = useState([])


  const MoviesSubmit = async (e) =>{
    e.preventDefault()

    try{
      const APIKEY = `dfe458f5f649331adffa8e64e71b48b0`;
      const MoviesUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}`

      const res = await axios.get(MoviesUrl)
      //console.log(res)
      setMovies(res.data.results.slice(0,5))

      const CreditFunc = await res.data.results.slice(0,5).map( async(movies)=>{
        const CreditUrl = `https://api.themoviedb.org/3/movie/${movies.id}/credits?api_key=${APIKEY}`
        const creditRes = await axios.get(CreditUrl)
        const CreditSlice = creditRes.data.cast.slice(0,3)
        // console.log(CreditSlice)
        return {movieId: movies.id, credits: CreditSlice}
      })

      const Credit = await Promise.all(CreditFunc)
      setCredits(Credit)
    }
    catch(err){
      console.log(err)
    }
  }
  // React.useEffect(() => {
  //   console.log(Credits);

  // }, [Credits])
  

  return (
    <div className='page'>
      <h1>5 most Popular Movies Now</h1>
      <form onSubmit={MoviesSubmit}>
        <button className='button'>Get Now</button>
      </form>
        
     
    <ul>
      {Movies.map ((movie,Index) =>{
        return(
        <li key={Index}>
          <Movie movie={movie} credits={Credits}/>
        </li>
        )
      })}
    </ul>
    </div>
  )
}

export default App

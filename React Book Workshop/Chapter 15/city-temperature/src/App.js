import React, { useState } from 'react'
import './App.css'
import axios from 'axios'

const App = () => {
  const [City, setCity] = useState('')
  const [Temp, setTemp] = useState(0)
  const [Loading, setLoading] = useState(false)

  const submitForm = async(e) =>{
    e.preventDefault()

    setLoading(true)

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=236e27c7cf9653efda609858e9fd708b&units=metric`

    const res = await axios.get(url)
    setTemp(res.data.main.temp)

    try{
      const res = await axios.get(url)
      setTemp(res.data.main.temp)
    }catch(err){
      console.log(err)
    }finally{
      setLoading(false)
    }

  }
  return (
    <div className='page'>
      <div className='box'>
        <form className='weather-form' onSubmit={submitForm}>
        {Loading && <p>Loading....  </p>}
          <label htmlFor='city'>
            City name : 
            <input type="text" id="city" placeholder='Type a city' value={City} onChange={ (e) => setCity(e.target.value)}/>
          </label>
          <button className='weather-button'>Get temperature</button>
        </form>

        <div className='temp'>
        {Temp} &#8451;
        </div>
      </div>
      
    </div>
  )
}

export default App

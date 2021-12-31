import React,{ useState, useEffect } from 'react';
import axios from 'axios';
const API_KEY = `AIzaSyAe2TQTHMB-ktELx4UOYy6pFdkbJNou9sE`



const useFonts = (sort) => {

  const [Fonts, setFonts] = useState([])

  useEffect(() => {
    const getFonts = async () =>{ 
      //Fetch data
      const res = await axios.get(`https://www.googleapis.com/webfonts/v1/webfonts?key=${API_KEY}&sort=${sort}`)

      // update state
      setFonts(
        res.data.items.slice(0,10)
      )

    }
    
    getFonts()
  }, [sort])

  return Fonts

  
}

export default useFonts

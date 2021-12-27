import React from 'react'
import Recipe from './Recipe'
import RecipeList from './RecipeList'
import { RecipeService } from './RecipeService'
import "./App.css"

const App =() => {
  return (
    <RecipeService>
      <div className='App'>
        <RecipeList/>
        <Recipe/>
      </div>
    </RecipeService>
  )
}

export default App

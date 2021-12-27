import React, { useContext } from 'react'
import { RecipeContext } from './RecipeService'

const RecipeList =() => {
  const {recipes, setSelectedRecipe} = useContext(RecipeContext)
  // console.log(recipes)

  return (
    <div>
      <h1>Recipes</h1>
      <ul>
        {recipes != null ? 
            recipes.map((recipes,i) => {
              return(
                <li key={i} onClick={ () => setSelectedRecipe(recipes)} 
                  style={{
                    color: "#FF0000",
                    cursor: "pointer"
                  }}>
                  {recipes.title}
                </li>
              )
          })
        : "Recipe is loading...."
      }
      </ul>
    </div>
  )
}

export default RecipeList

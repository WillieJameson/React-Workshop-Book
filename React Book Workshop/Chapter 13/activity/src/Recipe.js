import React, { useContext } from 'react'
import { RecipeContext } from './RecipeService'

const Recipe = () => {
  const {selectedRecipe} = useContext(RecipeContext)
  // console.log(selectedRecipe)
  return (
    <div>
      <h1>Selected Recipe</h1>
      <strong>{selectedRecipe.title}</strong>
      <ul>
      {selectedRecipe.steps.map((selected, i) =>{
        return(
          <li key={i}>
            {selected}
          </li>
        )
      })}
      </ul>
    </div>
  )
}
// can't use it bcs map is an array method not a object
// {selectedRecipe.map((selected, i) =>{
//   return(
//     <li key={i}>
//       {selected.steps}
//     </li>
//   )
// })}
export default Recipe


function DisplayRecipes( {recipeResults }) {
    console.log(recipeResults)
  return (
    <div>
        {recipeResults.map(recipe => (
            <div key={recipe}>
                <h2>{recipe.title}</h2>
                <img src={recipe.image}/>
            </div>
        ))}
    </div>
  )
}

export default DisplayRecipes;
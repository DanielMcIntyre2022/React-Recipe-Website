import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function RecipeDetail( ) {

  // use useParams to receive unique id recipe data to Recipe Detail page

  const { uniqueID: uniqueID} = useParams();
  const [ recipeDetails, setRecipeDetails] = useState([]);

  // make axios call with the unique id as a param to receive data related to its ID

  const getReceiptDetails = async (uid) => {
      await axios.get(`https://api.spoonacular.com/recipes/${uid}/information/?apiKey=${process.env.REACT_APP_API_KEY}`)
      .then(res => {
        setRecipeDetails(res.data)
      })
  };
  
  useEffect(() => {
    if (!uniqueID) return;
    getReceiptDetails(uniqueID)
  }, [uniqueID]);

  return (
    <div>
      <div>
        <h2>{recipeDetails.title}</h2>
        <img src={recipeDetails.image}/>
      </div>
      <div className="health-info">
        <h2>Health Information:</h2>
        <span>Vegetarian:{recipeDetails.vegetarian === true ? <p>Yes</p> : <p>No</p>}</span>
        <span>Gluten Free:{recipeDetails.glutenFree === true ? <p>Gluten Free</p> : <p>No</p>}</span>
        <span>Dairy Free:{recipeDetails.dairyFree === true ? <p>Diary Free</p> : <p>No</p>}</span>
        <span>Very Healthy?{recipeDetails.veryHealthy === true ? <p>Diary Free</p> : <p>No</p>}</span>
      </div>
      <div className="ingredient-list">
        <h2>Ingredients:</h2>
        { 
        recipeDetails.extendedIngredients &&
        recipeDetails.extendedIngredients.map(ingredient => (
          <p key={ingredient}>{ingredient.name}</p>
        ))}
      </div>
      <div className="cooking-instructions">
        <h2>Instructions:</h2>
          {
          recipeDetails.extendedIngredients &&
          recipeDetails.analyzedInstructions[0].steps.map(instructions => (
            <p key={instructions}>{instructions.step}</p>
          ))}
      </div>
    </div>
  )
}

export default RecipeDetail;
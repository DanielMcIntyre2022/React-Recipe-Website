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
    <div className="recipe-detail-wrapper mt-10">
      <div className="left-recipe-detail flex">
        <div className="recipe-image-title">
          <img className="border-8 rounded-full" src={recipeDetails.image}/>
          <h2>{recipeDetails.title}</h2>
        </div>
      </div>
      <div className="health-info flex flex-col">
        <h2>Health Information:</h2>
        <span>Vegetarian: {recipeDetails.vegetarian === true ? <span>Yes</span> : <span>No</span>}</span>
        <span>Gluten Free:{recipeDetails.glutenFree === true ? <span>Gluten Free</span> : <span>No</span>}</span>
        <span>Dairy Free:{recipeDetails.dairyFree === true ? <span>Diary Free</span> : <span>No</span>}</span>
        <span>Very Healthy?{recipeDetails.veryHealthy === true ? <span>Diary Free</span> : <span>No</span>}</span>
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
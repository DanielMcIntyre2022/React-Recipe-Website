import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function RecipeDetail( ) {

  // use useParams to receive unique id recipe data to Recipe Detail page

  const { uniqueID: uniqueID} = useParams();
  const [ recipeDetails, setRecipeDetails] = useState([]);
  const [ loading, setLoading ] = useState(false);

  // make axios call with the unique id as a param to receive data related to its ID

  const getReceiptDetails = async (uid) => {
       setLoading(true)
      await axios.get(`https://api.spoonacular.com/recipes/${uid}/information/?apiKey=${process.env.REACT_APP_API_KEY}`)
      .then(res => {
        setRecipeDetails(res.data)
        setLoading(false)
      })
  };
  
  useEffect(() => {
    if (!uniqueID) return;
    getReceiptDetails(uniqueID)
  }, [uniqueID]);

  if (loading ) return "Loading..."

  return (
  <div className="recipe-detail-container mt-10 flex flex-col">
    <div className="recipe-detail-wrapper flex">
      <div className="flex flex-col w-80%">
      <div className="left-recipe-detail flex">
        <div className="recipe-image-title">
          <img className="rounded-full" src={recipeDetails.image}/>
          <h2 className="font-bold mt-5 mb-5">{recipeDetails.title}</h2>
        </div>
      </div>
      <div className="health-info flex flex-col border p-10">
        <h2 className="font-semibold underline mb-5">Health Information:</h2>
        <span>Vegetarian: {recipeDetails.vegetarian === true ? <span>Yes</span> : <span>No</span>}</span>
        <span>Gluten Free: {recipeDetails.glutenFree === true ? <span>Gluten Free</span> : <span>No</span>}</span>
        <span>Dairy Free: {recipeDetails.dairyFree === true ? <span>Diary Free</span> : <span>No</span>}</span>
        <span>Very Healthy? {recipeDetails.veryHealthy === true ? <span>Diary Free</span> : <span>No</span>}</span>
      </div>
      </div>
      <div className="ingredient-list border p-10 w-50%">
        <h2 className="font-semibold underline mb-5 text-xl">Ingredients:</h2>
        <ul>
        { 
        recipeDetails.extendedIngredients &&
        recipeDetails.extendedIngredients.map(ingredient => (
             <li key={ingredient}>{ingredient.name}</li>
        ))}
        </ul>
        </div>
      <div className="cooking-instructions border pl-5 pr-5">
        <h2 className="font-semibold underline mb-5 mt-10 text-xl">Cooking Instructions:</h2>
        <ol>
          {
          recipeDetails.extendedIngredients &&
          recipeDetails.analyzedInstructions[0].steps.map(instructions => (
              <li key={instructions}>{instructions.step}</li>
          ))}
          </ol>
      </div>
      </div>
    </div>
  )
}

export default RecipeDetail;
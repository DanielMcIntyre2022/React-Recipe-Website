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
  <div className="recipe-detail-container mt-10">
    <div className="recipe-detail-wrapper">
     <div className="recipe-image-and-health-info flex justify-center max-[800px]:flex-col">
      <div className="left-recipe-detail flex">
        <div className="recipe-image-title border border-slate-400 p-10">
          <img className="rounded-full border-8" src={recipeDetails.image}/>
          <h2 className="font-bold mt-5 mb-5 text-xl">{recipeDetails.title}</h2>
        </div>
      </div>
      <div className="health-info border border-slate-400 p-10">
        <h2 className="font-semibold underline mb-5 text-xl">Health Information:</h2>
      <ul>
        <li>Vegetarian: {recipeDetails.vegetarian === true ? <span>Yes</span> : <span>No</span>}</li>
        <li>Gluten Free: {recipeDetails.glutenFree === true ? <span>Gluten Free</span> : <span>No</span>}</li>
        <li>Dairy Free: {recipeDetails.dairyFree === true ? <span>Diary Free</span> : <span>No</span>}</li>
        <li>Very Healthy? {recipeDetails.veryHealthy === true ? <span>Diary Free</span> : <span>No</span>}</li>
      </ul>
      </div>
     
      <div className="ingredient-list border border-slate-400 p-10">
        <h2 className="font-semibold underline mb-5 text-xl">Ingredients:</h2>
        <ul>
        { 
        recipeDetails.extendedIngredients &&
        recipeDetails.extendedIngredients.map(ingredient => (
             <li key={ingredient}>{ingredient.name}</li>
        ))}
        </ul>
        </div>
      </div>
      <div className="cooking-instructions border pl-5 pr-5 pb-20 border-slate-400">
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
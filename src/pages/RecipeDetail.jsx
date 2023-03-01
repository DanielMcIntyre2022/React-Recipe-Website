import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function RecipeDetail( ) {

  // use useParams to receive unique id recipe data to Recipe Detail page

  const { uniqueID: uniqueID} = useParams();
  const [ recipeDetails, setRecipeDetails] = useState([]);

  const getReceiptDetails = async (uid) => {
      const {data} = await axios.get(`https://api.spoonacular.com/recipes/${uid}/ingredientWidget.json/?apiKey=${process.env.REACT_APP_API_KEY}`)
      console.log(data)
  };

  useEffect(() => {
    if (!uniqueID) return;
    getReceiptDetails(uniqueID)
  }, [uniqueID]);

  return (
    <div>RecipeDetail</div>
  )
}

export default RecipeDetail;
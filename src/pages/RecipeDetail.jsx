import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function RecipeDetail( ) {

  // use useParams to receive unique id recipe data to Recipe Detail page

  const { uniqueID: uniqueID} = useParams();
  const [ recipeDetails, setRecipeDetails] = useState([]);

  // make axios call with the unique id as a param to receive data related to its ID

  const getReceiptDetails = (uid) => {
      axios.get(`https://api.spoonacular.com/recipes/${uid}/information/?apiKey=${process.env.REACT_APP_API_KEY}`)
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
    </div>
  )
}

export default RecipeDetail;
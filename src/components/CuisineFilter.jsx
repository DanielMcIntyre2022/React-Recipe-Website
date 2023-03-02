import { cuisines } from "../data";
import { useState } from "react";

function CuisineFilter() {

const [ cuisineFilter, setCuisineFilter ] = useState()

const API_URL = `https://api.spoonacular.com/recipes/complexSearch?query=${cuisineFilter}&apiKey=${process.env.REACT_APP_API_KEY}&includeNutrition=true`;

  return (
    <div className="filter">
        <select>
            {
                cuisines.map(cuisine => (
                    <option>{cuisine}</option>
                ))
            }
        </select>
    </div>
  )
};

export default CuisineFilter;
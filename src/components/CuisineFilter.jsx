import { cuisines } from "../data";
import { useState } from "react";

function CuisineFilter() {

const [ cuisineFilter, setCuisineFilter ] = useState('')

const API_URL = `https://api.spoonacular.com/recipes/complexSearch?query=${cuisineFilter}&apiKey=${process.env.REACT_APP_API_KEY}&includeNutrition=true`;

const handleFilter = (e) => {
    const valueSelected = e.target.value;
    setCuisineFilter(valueSelected)
};

console.log(cuisineFilter);

  return (
    <div className="filter">
        <select 
        className="p-2"
        name="cuisine" 
        onChange={handleFilter}>
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
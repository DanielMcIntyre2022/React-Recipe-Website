import axios from "axios";
import { cuisines } from "../data";
import { useState } from "react";

function CuisineFilter() {

const [ cuisineFilter, setCuisineFilter ] = useState('')

const API_URL = `https://api.spoonacular.com/recipes/complexSearch?query=${cuisineFilter}&apiKey=${process.env.REACT_APP_API_KEY}&includeNutrition=true`;

const getCuisines = () => {
    axios.get(API_URL).then(res => {
        console.log(res.data)
    })
};

console.log(cuisineFilter);

  return (
    <div className="filter">
        <select 
        className="p-2"
        name="cuisine" 
        onChange={((e) => setCuisineFilter(e.target.value))}>
            {
                cuisines.map(cuisine => (
                    <option onClick={getCuisines}>{cuisine}</option>
                ))
            }
        </select>
    </div>
  )
};

export default CuisineFilter;
import { cuisines } from "../data";
import axios from 'axios';
import { useState } from 'react';
import DisplayRecipes from './DisplayRecipes';

function SearchBar() {

const [ searchQuery, setSearchQuery ] = useState("");
const [ cuisineFilter, setCuisineFilter ] = useState("");
const [ recipeResults, setRecipeResults ] = useState([]);

// api endpoint for basic recipe searches 
const RECIPE_SEARCH_API_URL = `https://api.spoonacular.com/recipes/complexSearch?query=${searchQuery}&apiKey=${process.env.REACT_APP_API_KEY}&includeNutrition=true`;
// api endpoint for recipe searches filtered by cuisine 
const RECIPE_FILTER_AND_SEARCH_URL=`https://api.spoonacular.com/recipes/complexSearch?query=${searchQuery}&${cuisineFilter}&apiKey=${process.env.REACT_APP_API_KEY}&includeNutrition=true`

// function for recipe searches without cuisine filter 
const getSearchedRecipes = () => {
        axios.get(RECIPE_SEARCH_API_URL).then(res => {
        setRecipeResults(res.data.results)
    }).catch(err => {
        console.log(err)
    })
};

// function for recipe searches filtered by cuisine 
const getSearchedRecipeByCuisine = () => {
    axios.get(RECIPE_FILTER_AND_SEARCH_URL).then(res => {
        searchQuery(res.data)
    })
};

const onSubmit = (e) => {
    e.preventDefault();
}
  
  return (
    <div className='flex justify-between items-center mx-32 mt-10'>
        <div className='recipe-search-bar'>
             <form onSubmit={onSubmit}>
                <input
                value={searchQuery}
                type="text"
                placeholder='search for a recipe...'
                onChange={(e) => setSearchQuery(e.target.value)}
                className='border p-3'
                />
                <button className="ml-2 bg-yellow-200 p-3 rounded-lg" onClick={getSearchedRecipes}>Search</button>
            </form>
        </div>
        <div className='cuisine-filter flex items-center'>
            <h2>Select Cuisine:</h2>
                <select 
                className="p-2 ml-5"
                name="cuisine" 
                onChange={((e) => setCuisineFilter(e.target.value))}>
                    {
                        cuisines.map(cuisine => (
                            <option onClick={getSearchedRecipeByCuisine}>{cuisine}</option>
                        ))
                    }
                </select>
        </div>
        <DisplayRecipes recipeResults={recipeResults}/>
    </div>
  )
}

export default SearchBar;
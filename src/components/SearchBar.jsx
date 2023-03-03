import { cuisines } from "../data";
import axios from 'axios';
import { useState } from 'react';
import DisplayRecipes from './DisplayRecipes';

function SearchBar() {

const [ searchQuery, setSearchQuery ] = useState("");
const [ cuisineFilter, setCuisineFilter ] = useState([]);
const [ recipeResults, setRecipeResults ] = useState([]);

// api endpoint for recipe searches 
const RECIPE_SEARCH_URL=`https://api.spoonacular.com/recipes/complexSearch?query=${searchQuery}&apiKey=${process.env.REACT_APP_API_KEY}&includeNutrition=true`
// api endpoint for recipe cuisines
const RECIPE_CUISINE_FILTER=`https://api.spoonacular.com/recipes/complexSearch?query=${cuisineFilter}&apiKey=${process.env.REACT_APP_API_KEY}&includeNutrition=true`

// function for recipe searches without cuisine filter 
const getSearchedRecipes = () => {
        axios.get(RECIPE_SEARCH_URL).then(res => {
        setRecipeResults(res.data.results)
    }).catch(err => {
        console.log(err)
    })
};

// function to filter through recipes by cuisine 
const getFilteredCuisines = () => {
    axios.get(RECIPE_CUISINE_FILTER).then(res => {
        setCuisineFilter(res.data.results)
    }).catch(err => {
        console.log(err)
    })
};

const onSubmit = (e) => {
    e.preventDefault();
}

  return (
    <div>
        <div className='flex justify-between items-center mx-6 mt-10 flex-col'>
            <div className='recipe-search-bar mb-10'>
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
                onClick={getFilteredCuisines}
                className="p-2 ml-5"
                name="cuisine"
                onChange={((e) => setCuisineFilter(e.target.value))}
                >
                    {
                        cuisines.map(cuisine => (
                            <option>
                                {cuisine}
                            </option>
                        ))
                    }
                </select>
            </div>
        </div>
        <div className="display-results">
            <DisplayRecipes recipeResults={recipeResults} cuisineFilter={cuisineFilter}/>
    </div>
</div>
  )
}

export default SearchBar;
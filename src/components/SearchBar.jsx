import axios from 'axios';
import { useState } from 'react';
import DisplayRecipes from './DisplayRecipes';

function SearchBar() {

const [ searchQuery, setSearchQuery ] = useState("");
const [ recipeResults, setRecipeResults ] = useState([]);

const API_URL = `https://api.spoonacular.com/recipes/complexSearch?query=${searchQuery}&apiKey=${process.env.REACT_APP_API_KEY}&includeNutrition=true`;

const getRecipes = () => {
        axios.get(API_URL).then(res => {
        setRecipeResults(res.data.results)
    }).catch(err => {
        console.log(err)
    })
};

const onSubmit = (e) => {
    e.preventDefault();
}

console.log(recipeResults)
  
  return (
    <div>
        <form onSubmit={onSubmit}>
            <input
            value={searchQuery}
            type="text"
            placeholder='search for a recipe...'
            onChange={(e) => setSearchQuery(e.target.value)}
            className='border'
            />
            <button onClick={getRecipes}>Search</button>
        </form>
        <DisplayRecipes recipeResults={recipeResults}/>
    </div>
  )
}

export default SearchBar;
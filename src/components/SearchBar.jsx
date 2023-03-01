import axios from 'axios';
import { useState } from 'react';

function SearchBar() {

const [ searchQuery, setSearchQuery ] = useState("");
const [ recipeResults, setRecipeResults ] = useState([]);

const API_URL = `https://api.spoonacular.com/recipes/complexSearch?query=${searchQuery}&number=5&apiKey=${process.env.REACT_APP_API_KEY}&includeNutrition=true`;

const getRecipes = () => {
        axios.get(API_URL).then(res => {
        console.log(res.data.results)
        setRecipeResults(res.data.results)
    }).catch(err => {
        console.log(err)
    })
};

const onSubmit = (e) => {
    e.preventDefault();
}
  
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
    </div>
  )
}

export default SearchBar;
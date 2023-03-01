import axios from 'axios';
import { useState, useEffect } from 'react';

function SearchBar() {

const [ searchQuery, setSearchQuery ] = useState("");

const API_URL = `https://api.spoonacular.com/recipes/complexSearch?query=pasta&number=5&apiKey=${process.env.REACT_APP_API_KEY}&includeNutrition=true`;

    axios.get(API_URL).then(res => {
      console.log(res.data)
    });

  return (
    <div>
        <form>
            <input
            className='border'
            />
        </form>
    </div>
  )
}

export default SearchBar;
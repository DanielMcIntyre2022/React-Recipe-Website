import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

const API_URL = `https://api.spoonacular.com/recipes/716429/information?apiKey=${process.env.REACT_APP_API_KEY}&includeNutrition=true`;

axios.get(API_URL).then(res => {
  console.log(res.data)
});

function App() {

  return (
    <div className="App">
      <h1>Recipe Website</h1>
      {/* Search Bar */}
    </div>
  );
}

export default App;

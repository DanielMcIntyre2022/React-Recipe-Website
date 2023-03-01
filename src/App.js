import './App.css';
import axios from 'axios';

const API_URL = `https://api.spoonacular.com/recipes/716429/information?apiKey=${process.env.REACT_APP_API_KEY}&includeNutrition=true`;

axios.get(API_URL).then(res => {
  console.log(res)
});

function App() {
  return (
    <div className="App">
      <h1>Recipe Website</h1>
    </div>
  );
}

export default App;

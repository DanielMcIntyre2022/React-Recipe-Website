import './App.css';
import SearchBar from './components/SearchBar';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <h1>Recipe Website</h1>
        <SearchBar/>
    </div>
  );
}

export default App;

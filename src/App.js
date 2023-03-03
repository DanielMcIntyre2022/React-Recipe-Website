import './App.css';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import RecipeDetail from './pages/RecipeDetail';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/recipe/:uniqueID' element={<RecipeDetail/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

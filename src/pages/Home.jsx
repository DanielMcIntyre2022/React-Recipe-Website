import CuisineFilter from '../components/CuisineFilter';
import SearchBar from '../components/SearchBar'

function Home() {
  return (
    <div className='flex'>
        <SearchBar/>
        <CuisineFilter/>
    </div>
  )
}

export default Home;
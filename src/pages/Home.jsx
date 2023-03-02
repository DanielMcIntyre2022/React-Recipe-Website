import CuisineFilter from '../components/CuisineFilter';
import SearchBar from '../components/SearchBar'

function Home() {
  return (
    <div className='flex justify-between mx-16 max-w-6xl mt-10'>
      <div className='flex'>
        <SearchBar/>
      </div>
      <div className='flex'>
        <CuisineFilter/>
     </div>
    </div>
  )
}

export default Home;
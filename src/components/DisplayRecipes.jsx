import { useState } from "react";
import { Link } from "react-router-dom";
import { GrLinkNext, GrLinkPrevious } from 'react-icons/gr';

function DisplayRecipes( {recipeResults, cuisineFilter}) {

// set the default page state
const [page, setPage] = useState(1);

// function to update the state and change page 
const selectPageHandler = (selectPage) => {
    if(selectPage >= 1 && 
        selectPage <= recipeResults.length / 5 && 
        selectPage !== page)
    setPage(selectPage)
};

  return (

<div>
    {/* If user search for recipes, display searched recipes */}
    {recipeResults &&
        <div className="display-recipes sm:grid sm:grid-cols-2 
        lg:grid-cols-3 xl:grid-cols-5 2x1:grid-cols-2 py-4 mt-10">
            {recipeResults.slice(page * 5 - 5, page * 5).map(recipe => (
                <div key={recipe} className="flex m-2 flex-col">
                    <Link to={`recipe/${recipe.id}`}>
                       <img className="rounded-full border-8 
                        sm:hover:shadow-slate-400 
                        sm:shadow-md" 
                       src={recipe.image} alt='recipe image'
                       />
                    </Link>
                    <h2 className="flex justify-center ml-2 font-semibold mt-5">{recipe.title}</h2>
                </div>
            ))}
            </div>
    }
    {
        // If user filters cuisines, display filtered cuisines
        cuisineFilter && 
        <div className="display-recipes sm:grid sm:grid-cols-2 
        lg:grid-cols-3 xl:grid-cols-5 2x1:grid-cols-2 py-4 mt-10">
             {   Array.isArray(cuisineFilter) &&
                cuisineFilter.map(cuisine => (
                    <div key={cuisine} className="flex m-2 flex-col">
                    <Link to={`recipe/${cuisine.id}`}>
                       <img className="rounded-full border-8 
                        sm:hover:shadow-slate-400 
                        sm:shadow-md" 
                       src={cuisine.image} alt='recipe image'
                       />
                    </Link>
                    <h2 className="flex justify-center ml-2 font-semibold mt-5">{cuisine.title}</h2>
                </div>
                ))
            }
        </div>
    }
     {
    // Pagination Logic for Search Results //
            recipeResults.length > 0 && 
            <div className="pagination mb-28"> 
                <button
                onClick={() => selectPageHandler(page - 1)}>
                    <GrLinkPrevious className="w-10 h-5"/>
                </button>

                {[...Array(recipeResults.length / 5)].map((_,i) => {
                        return <span 
                        className={page === i+1? "bg-gray-300 p-5 rounded m-2" : ""} 
                        onClick={() => selectPageHandler(i + 1)} key={i}>
                            {i +1}
                        </span>
                    })}

                <button 
                onClick={() => selectPageHandler(page + 1)}>
                    <GrLinkNext className="w-10 h-5"/>
                </button>
            </div>
        }
</div>
  )
};

export default DisplayRecipes;
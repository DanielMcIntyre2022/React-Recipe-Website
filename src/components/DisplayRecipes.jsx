import { useState } from "react";
import { Link } from "react-router-dom";
import { GrLinkNext, GrLinkPrevious } from 'react-icons/gr';

function DisplayRecipes( {recipeResults, cuisineFilter}) {

console.log(cuisineFilter)

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
    // Display Searched Recipes //
<div>
    <div className="display-recipes sm:grid sm:grid-cols-2 
    lg:grid-cols-3 xl:grid-cols-5 2x1:grid-cols-2 max-w-6x1 
    mx-auto py-4 mt-10">
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

    {/* <div>
        {   cuisineFilter &&
            cuisineFilter.map(cuisine => (
                <p>{cuisine.title}</p>
            ))
        }
    </div> */}


        {
    // Pagination Logic //
            recipeResults.length > 0 && 
            <div className="pagination"> 
                <button
                onClick={() => selectPageHandler(page - 1)}>
                    <GrLinkPrevious className="w-10 h-5"/>
                </button>

                {[...Array(recipeResults.length / 5)].map((_,i) => {
                        return <span 
                        className={page === i+1? "bg-gray-300" : ""} 
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
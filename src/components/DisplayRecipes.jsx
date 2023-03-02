import { useState } from "react";
import { Link } from "react-router-dom";

function DisplayRecipes( {recipeResults}) {

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
    // Display Recipes //
    <div>
        {recipeResults.slice(page * 5 - 5, page * 5).map(recipe => (
            <div key={recipe}>
                <h2>{recipe.title}</h2>
                <Link to={`recipe/${recipe.id}`}>
                   <img src={recipe.image} alt='recipe image'/>
                </Link>
            </div>
        ))}
        {
    // Pagination Logic //
            recipeResults.length > 0 && 
            <div className="pagination"> 
                <button
                onClick={() => selectPageHandler(page - 1)}
                className="">previous</button>

                {[...Array(recipeResults.length / 5)].map((_,i) => {
                        return <span 
                        className={page === i+1? "bg-gray-300" : ""}
                        onClick={() => selectPageHandler(i + 1)} key={i}>
                            {i +1}
                        </span>
                    })}

                <button 
                onClick={() => selectPageHandler(page + 1)}
                className="">next</button>
            </div>
        }
    </div>
  )
};

export default DisplayRecipes;
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header bg-teal-100 p-5">
        <Link to='/'>
            <h1 className="text-lg font-semibold">Recipe Website</h1>
        </Link>
    </div>
  )
}

export default Header;
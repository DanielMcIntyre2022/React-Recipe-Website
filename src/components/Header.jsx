import { Link } from "react-router-dom";
import { MdOutlineFoodBank } from 'react-icons/md';

function Header() {
  return (
    <div className="header bg-teal-100 p-5 flex justify-center item-center">
          <div className="app-logo">
            <MdOutlineFoodBank size={40} className="mr-5"/>
          </div>
          <div className="app-title mt-2">
          <Link to='/'>
            <h1 className="text-lg font-semibold">Recipe Website</h1>
        </Link>
        </div>
    </div>
  )
}

export default Header;
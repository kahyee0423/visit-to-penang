import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  const [hidden, setHidden] = useState(true);

  const activeClass = 'block py-2 px-3 text-white bg-accent-orange rounded md:bg-transparent md:text-accent-orange md:p-0';

  const inactiveClass = 'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-accent-orange-hover md:p-0';

  

  return (
    <header>
      <nav className="bg-white border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5">
          {/* Logo Section */}
          <Link to="/" className="flex items-center">
              <img src='images/Logo.png' className="h-9 w-auto p-0 m-0" alt="Logo" loading="lazy"/>
              <span className="self-center text-base font-bold whitespace-nowrap">enang Voyage</span>
          </Link>

          {/* Navbar Items */}
          <div className={`${hidden ? 'hidden' : ''} justify-between w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 text-xs lg:text-sm font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-10 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
              <li>
              <NavLink to="/" className={({isActive}) => isActive ? activeClass : inactiveClass} end>Home</NavLink>
              </li>
              <li>
                <NavLink to="/tourist-spots" className={({isActive}) => isActive ? activeClass : inactiveClass}>Tourist Spots</NavLink>
              </li>
              <li>
                <NavLink to="/food" className={({isActive}) => isActive ? activeClass : inactiveClass}>Food</NavLink>
              </li>
              <li>
                <NavLink to="/entertainment" className={({isActive}) => isActive ? activeClass : inactiveClass}>Entertainment</NavLink>
              </li>
              <li>
                <NavLink to="/team" className={({isActive}) => isActive ? activeClass : inactiveClass}>Team</NavLink>
              </li>
            </ul>  
          </div>

          {/* Hamburger section */}
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              {/* Hamburger Button */}
              <button onClick={() => setHidden(!hidden)} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-100" aria-controls="navbar-sticky" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
          </div>
        </div>
      </nav>

    
    </header>
  )
}

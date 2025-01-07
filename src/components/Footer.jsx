import { Link as ScrollLink} from "react-scroll";
import { Link, useLocation } from "react-router-dom";

export const Footer = () => {
  const location = useLocation();

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      // Scroll to the hero section if on the homepage
      document.getElementById("hero-section")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="flex flex-col my-8">
        {location.pathname === "/" ? (
            <ScrollLink
              to="hero-section"
              spy={true}
              smooth={true}
              offset={-100}
              duration={1000}
              className="flex justify-center cursor-pointer"
            >
              <img
                src="Logo.png"
                className="h-14 w-auto p-0 m-0"
                alt="Logo"
                loading="lazy"
              />
              <span className="self-center text-xl font-bold whitespace-nowrap">enang Voyage</span>
            </ScrollLink>
          ) : (
            <Link to="/" onClick={handleLogoClick} className="flex justify-center cursor-pointer">
              <img
                src="Logo.png"
                className="h-14 w-auto p-0 m-0"
                alt="Logo"
                loading="lazy"
              />
              <span className="self-center text-xl font-bold whitespace-nowrap">Enang Voyage</span>
            </Link>
          )}

          <p className="text-center text-grey text-xs mt-4">Copyright © 2025. All Rights Reserved.</p>

          <ul className="flex flex-wrap justify-center mt-10 text-xs text-black cursor-pointer">
            <li>
              <Link to="/tourist-spots" className="me-4 md:me-6  hover:text-accent-orange-hover">Tourist Spots</Link>
            </li>
            <li>
              <Link to="/entertainment" className="me-4 md:me-6  hover:text-accent-orange-hover">Entertainment</Link>
            </li>
            <li>
              <Link to="/food" className="me-4 md:me-6 hover:text-accent-orange-hover">Food</Link>
            </li>
            <li>
              <ScrollLink to="team" spy={true} smooth={true} offset={-50} duration={1000} className="hover:text-accent-orange-hover">Team</ScrollLink>
            </li>
          </ul>
        </div>

        
      </div>
    </footer>


  )
}

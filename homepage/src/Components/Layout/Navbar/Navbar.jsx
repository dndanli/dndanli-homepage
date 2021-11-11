import { useState } from "react";
import { NavItems } from "./NavItems";
import { FaBars } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = ({className}) => {
  
  const [clicked, setClicked] = useState(false);

  const toggleMenu = () => {
    setClicked(!clicked);
  };

  return (
    <nav className={className}>
      <div className="inner__container">
        <ul className={!clicked ? "nav__item" : "slide__item"}>
          
          <li> <Link to="/"> Bio </Link> </li>
          <li> <Link to="/projects"> Projects </Link> </li>

          {NavItems.map((el, index) => {
            return (
              <li key={index}>
                <a href={el.url}> {el.title} </a>
              </li>
            );
          })}

        </ul>

        <div className="menu__icon" onClick={toggleMenu}>
          <i>{!clicked ? <FaBars /> : <FaWindowClose />}</i>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;

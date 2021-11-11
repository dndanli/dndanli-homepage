//hooks
import { useState } from "react";

//text
import { NavItems } from "./NavItems";

//icons
import { FaBars } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";

//media functionality - might change tWo react-media
import CheckQuery from "../../../Helpers/MdQuery.js";

import toggleMenuIcon from "./toggle";

//styles
import {
  containerStyle,
  menuIconStyle,
  navItemsStyle,
  slideItemsStyle,
  anchorStyle,
} from "./NavbarStyles";

import { Link } from "react-router-dom";

const Navbar = () => {
  const matches = CheckQuery("(max-width: 753px)");

  const { useMenuStyle, useNavStyle, useMobileStyle } = toggleMenuIcon(
    matches,
    menuIconStyle,
    navItemsStyle,
    slideItemsStyle
  );

  const [clicked, setClicked] = useState(false);

  const toggleMenu = () => {
    setClicked(!clicked);
  };

  return (
    <div style={{ backgroundColor: "#F1F5F2" }}>
      
      {/* menu icon for mobile screens */}
      <nav>
        <div style={useMenuStyle} onClick={toggleMenu}>
          <i>{!clicked ? <FaBars /> : <FaWindowClose />}</i>
        </div>
      </nav>

      <div style={containerStyle}>
        <ul style={!clicked ? useNavStyle : useMobileStyle}>

          <li>
            <Link style={anchorStyle} to="/">
              Bio
            </Link>
          </li>

          <li>
            <Link style={anchorStyle} to="/projects">
              Projects
            </Link>
          </li>

          {NavItems.map((el, index) => {
            return (
              <li key={index}>
                <a style={anchorStyle} href={el.url}>
                  {el.title}
                </a>
              </li>
            );
          })}

        </ul>
      </div>
    </div>
  );
};

export default Navbar;

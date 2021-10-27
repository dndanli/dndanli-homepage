//hooks
import { useState } from "react";

//text
import { NavItems } from "./NavItems";

//icons
import { FaBars } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";

//media functionality - might change to react-media
import CheckQuery from "./NavMediaQuery";

//styles
import { containerStyle } from "./NavbarStyles";

let navItemsStyle = {
  display: "flex",
  justifyContent: "space-evenly",
  width: "30%",
  margin: 0,
  padding: "1em",
  visibility: "",
};

let menuIconStyle = {
  right: "1em",
  position: "absolute",
  padding: "1em",
  visibility: "",
};

const Navbar = () => {
  const matches = CheckQuery("(max-width: 753px)");

  // if screen is less than max width
  if (matches) {
    // make menu icon visible
    menuIconStyle = { ...menuIconStyle, visibility: "visible" };

    // hide the nav links
    navItemsStyle = { ...navItemsStyle, visibility: "hidden" };
  } else {
    menuIconStyle = { ...menuIconStyle, visibility: "hidden" };
    navItemsStyle = { ...navItemsStyle, visibility: "visible" };
  }

  const [clicked, setClicked] = useState(false);

  const toggleMenu = () => {
    setClicked(!clicked);
  };

  return (
    <div style={{ position: "relative" }}>
      <nav>
        <div style={menuIconStyle} onClick={toggleMenu}>
          <i>{!clicked ? <FaBars /> : <FaWindowClose />}</i>
        </div>
      </nav>

      <div style={containerStyle}>
        <ul style={navItemsStyle}>
          {NavItems.map((el, index) => {
            return (
              <li style={{ listStyle: "none" }} key={index}>
                <a style={{ textDecoration: "none" }} href={el.url}>
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

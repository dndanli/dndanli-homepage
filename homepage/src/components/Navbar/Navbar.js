import { useState } from "react";
import { NavItems } from "./NavItems";
import { FaBars } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";
import CheckQuery from "./NavMediaQuery";

const navItemsStyle = {
  display: "flex",
  justifyContent: "space-evenly",
  width: "30%",
  margin: 0,
  padding: 0,
};

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
};

let menuIconStyle = {
  visibility: "hidden",
};

const Navbar = () => {
  const matches = CheckQuery("(max-width: 753px)");

  if (matches) {
    menuIconStyle = { ...menuIconStyle, visibility: "visible" };
  } else {
    menuIconStyle = { ...menuIconStyle, visibility: "hidden" };
  }

  const [clicked, setClicked] = useState(false);

  const toggleMenu = () => {
    setClicked(!clicked);
  };

  return (
    <div>
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

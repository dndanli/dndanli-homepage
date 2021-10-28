//hooks
import { useState } from "react";

//text
import { NavItems } from "./NavItems";

//icons
import { FaBars } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";

//media functionality - might change to react-media
import CheckQuery from "./NavMediaQuery";

import useNavStyleToggle from "./toggle";

//styles
import { containerStyle } from "./NavbarStyles";
// import "./generalStyle.css";

let menuIconStyle = {
  right: "1em",
  fontSize: "1.3em",
  position: "absolute",
  padding: "1em",
  visibility: "",
};

let navItemsStyle = {
  display: "flex",
  justifyContent: "space-evenly",
  width: "30%",
  margin: 0,
  padding: "1em",
  visibility: "",
};

let slideItemsStyle = {
  transition: "200ms ease",
  background: "grey",
  width: "20vw",
  minHeight: "10vh",
  margin: "1em",
  padding: "1em",
  position: "absolute",
  top: "2em",
  right: "1.6em",
  borderRadius: ".5em",
  zIndex: 1,
  visibility: "",
};

let anchorStyle = {
  color: "black",
  textDecoration: "none",
};
const Navbar = () => {
  const matches = CheckQuery("(max-width: 753px)");

  const { menuSty, navSty, slideSty } = useNavStyleToggle(
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
    <div>
      <nav>
        <div style={menuSty} onClick={toggleMenu}>
          <i>{!clicked ? <FaBars /> : <FaWindowClose />}</i>
        </div>
      </nav>

      <div style={containerStyle}>
        <ul style={!clicked ? navSty : slideSty}>
          {NavItems.map((el, index) => {
            return (
              <li style={{ listStyle: "none" }} key={index}>
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

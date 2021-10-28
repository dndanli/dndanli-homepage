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

// let slideItemsStyle = {
//   transition: "",
//   background: "green",
//   margin: 0,
//   position: "absolute",
// };

const Navbar = () => {
  const matches = CheckQuery("(max-width: 753px)");

  const { menuSty, navSty } = useNavStyleToggle(
    matches,
    menuIconStyle,
    navItemsStyle
  );

  const [clicked, setClicked] = useState(false);

  const toggleMenu = () => {
    setClicked(!clicked);
  };

  return (
    <div style={{ position: "relative" }}>
      <nav>
        <div style={menuSty} onClick={toggleMenu}>
          <i>{!clicked ? <FaBars /> : <FaWindowClose />}</i>
        </div>
      </nav>

      <div style={containerStyle}>
        <ul style={navSty}>
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

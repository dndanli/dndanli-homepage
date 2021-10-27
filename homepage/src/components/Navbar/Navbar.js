import { useState } from "react";
import { NavItems } from "./NavItems";
import { FaBars } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";

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

const listStyle = {
  listStyle: "none",
};

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const toggleMenu = () => {
    setClicked(!clicked);
  };

  return (
    <div>
      <nav className="nav-items">
        <div className="menu-icon" onClick={toggleMenu}>
          <i>{!clicked ? <FaBars /> : <FaWindowClose />}</i>
        </div>
      </nav>

      <div style={containerStyle}>
        <ul style={navItemsStyle}>
          {NavItems.map((el, index) => {
            return (
              <li style={listStyle}>
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

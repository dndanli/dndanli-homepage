import { CardStyle, header3Styles, header4Styles } from "./CardStyles";
import "./CardHover.css";

const Card = (props) => {
  return (
    <a
      href={props.projectURL}
      style={{ textDecoration: "none", color: "black" }}
    >
      <div style={CardStyle} className="main-card">
        <div>
          <h3 style={header3Styles}>{props.projectName}</h3>
          <h4 style={header4Styles}>{props.projectDesc}</h4>
        </div>
      </div>
    </a>
  );
};
export default Card;

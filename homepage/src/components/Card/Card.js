import { CardStyle, header3Styles, header4Styles } from "./CardStyles";
import "./CardHover.css";

const Card = (props) => {
  return (
    <div style={CardStyle} className="main-card">
      <div>
        <h3 style={header3Styles}>{props.projectName}</h3>
        <h4 style={header4Styles}>{props.projectDesc}</h4>
      </div>
    </div>
  );
};
export default Card;

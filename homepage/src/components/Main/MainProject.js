import Card from "../Card/Card";
import "../assets/css/fonts.css";
import { ProjectPageStyle, ProjectInnerStyle } from "./MainProjectStyles";

const MainProject = () => {
  return (
    <div style={ProjectPageStyle}>
      <div style={ProjectInnerStyle}>
        <h1>Projects</h1>

        <h4>Few of my projects I made while in college.</h4>

        <h4>Latest:</h4>
        <div>
          <Card
            projectName="Health Promotion"
            projectDesc="Web application to check user's Blood pressure levels and BMI index."
          />
        </div>
        <div>
          <Card
            projectName="Stock Scraper"
            projectDesc="Financial stock data scraper."
          />
        </div>
        <div>
          <Card
            projectName="OpenWeatherMap-Java"
            projectDesc="Application made for checking the weather at a specified Zip Code"
          />
        </div>
      </div>
    </div>
  );
};

export default MainProject;

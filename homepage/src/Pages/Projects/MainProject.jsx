import Card from "../../Components/Layout/Card/Card.jsx";
import "../../Fonts/fonts.css";
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
            projectURL="https://github.com/dndanli/HealthPromotion"
          />
        </div>
        <div>
          <Card
            projectName="Stock Scraper"
            projectDesc="Financial stock data scraper."
            projectURL="https://github.com/dndanli/StockScraper"
          />
        </div>
        <div>
          <Card
            projectName="OpenWeatherMap-Java"
            projectDesc="Application made for checking the weather at a specified Zip Code"
            projectURL="https://github.com/dndanli/openweathermap-java"
          />
        </div>
      </div>
    </div>
  );
};

export default MainProject;

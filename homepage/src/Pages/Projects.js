import Card from "../components/Card/Card";
import "../components/assets/css/fonts.css";

const Projects = () => {
  return (
    <div style={{ backgroundColor: "#F1F5F2" }}>
      <h1>Projects</h1>
      <h4>Few of my projects I made while in college.</h4>

      <h4>Latest:</h4>
      <div>
        <Card
          projectName="Health Promotion"
          projectDesc="Web application to check user's Blood pressure levels and BMI index."
        />
        <Card
          projectName="Stock Scraper"
          projectDesc="Financial stock data scraper."
        />
        <Card
          projectName="OpenWeatherMap-Java"
          projectDesc="Application made for checking the weather at a specified Zip Code"
        />
      </div>
    </div>
  );
};

export default Projects;

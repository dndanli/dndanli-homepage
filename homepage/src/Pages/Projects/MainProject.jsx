// import Card from "../../Components/Layout/Card/Card.jsx";
import { StyledCard } from "../../Components/Layout/Card/Card.style";
import "../../Fonts/fonts.css";

const MainProject = ({className}) => {
  
  return (
    <div className={className}>
      <h1 className="headerStyle">Projects</h1>
      <div className="cards">

        <StyledCard
          projectName="Decide my meal"
          projectDesc="A website to help people decide what to and where to eat"
          projectURL="http://decidemymeal.com/">
        </StyledCard>

        <StyledCard
          projectName="Expenses tracker"
          projectDesc="Expenses tracker web-app."
          projectURL="https://github.com/dndanli/Expenses-tracker">
        </StyledCard>

        <StyledCard
          projectName="Stock Scraper"
          projectDesc="Financial stock data scraper."
          projectURL="https://github.com/dndanli/StockScraper">
        </StyledCard>

        <StyledCard
          projectName="Health Promotion"
          projectDesc="Web application to check user's Blood pressure levels and BMI index."
          projectURL="https://github.com/tsorteberg/HealthPromotion">
        </StyledCard>

      </div>
    </div>
  );
};

export default MainProject;

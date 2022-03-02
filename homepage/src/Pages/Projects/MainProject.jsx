// import Card from "../../Components/Layout/Card/Card.jsx";
import { StyledCard } from "../../Components/Layout/Card/Card.style";
import "../../Fonts/fonts.css";
import P1 from "../../Assets/Images/decide-my-meal.png";
import P2 from "../../Assets/Images/expenses_tracker.png";
import P3 from "../../Assets/Images/health-promotion.png";

const MainProject = ({ className }) => {
  return (
    <div className={className}>
      <h1 className="headerStyle">Projects</h1>
      <div className="cards">
        <StyledCard
          projectName="Decide my meal"
          projectDesc="A website to help people decide what to eat and where to eat"
          projectURL="http://decidemymeal.com/"
          projectScreenShot={P1}
        ></StyledCard>

        <StyledCard
          projectName="Expenses tracker"
          projectDesc="A web app to help you keep track of your expenses."
          projectURL="https://github.com/dndanli/Expenses-tracker"
          projectScreenShot={P2}
        ></StyledCard>

        <StyledCard
          projectName="Health Promotion"
          projectDesc="A web app to check user's Blood pressure levels and BMI index."
          projectURL="https://github.com/tsorteberg/HealthPromotion"
          projectScreenShot={P3}
        ></StyledCard>
      </div>
    </div>
  );
};

export default MainProject;

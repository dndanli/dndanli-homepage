import "../../Fonts/fonts.css";
import { Link } from "react-router-dom";

const Home = ({className}) => {
  return (
    <div className={className}>
      <div className="homeLightTheme">
        <h1 className="headerStyle">Daniel De Lima</h1>
        <div className="headerStyle">
          <h4>
            Hey, I'm Daniel De Lima currently on my last semester at{" "}
            <a href="https://dmacc.edu">DMACC</a> majoring in Computer
            Information Systems.
          </h4>

          <h4>
            I ❤️ solving user-specific problems with code and creating fullstack
            applications.
          </h4>

          <h4>
            I'm currently seeking a job as a Software Engineer. So if you liked
            my projects and want to hire me, my contact info is right below and
            here is my <Link to="/">Resume.</Link>
          </h4>

          <h4>
            Find me on <a href="https://github.com/dndanli">GitHub</a>,
            <a style={{padding:"0px 0px 0px 5px"}} href="https://twitter.com/dndanli">Twitter</a>, and
            <a style={{paddingLeft:"5px"}} href="https://www.linkedin.com/in/daniel-de-lima-a07aa8223/">
               Linkedin
            </a>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Home;

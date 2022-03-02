import "../../Fonts/fonts.css";
import { Link } from "react-router-dom";
import { GiStoneCrafting } from "react-icons/gi";

const Home = ({ className }) => {
  return (
    <div className={className}>
      <div className="homeLightTheme">
        <h1 id="header-greeting">Hey I'm Daniel De Lima.</h1>
        <div className="headerStyle">
          <h4>
            I'm a <span id="dev">Fullstack Developer</span> based in Iowa, but
            originally from Brazil.
          </h4>
          <h4>
            Trying to be the best digital <GiStoneCrafting /> craftsman I can
            be.
          </h4>
          <h4>
            I'm currently seeking a job as a Software Engineer. So if you liked
            my projects and want to hire me
          </h4>

          <h4>
            my contact info is right below and here is my{" "}
            <Link to="/">Resume.</Link>
          </h4>

          <h4>
            Find me on{" "}
            <a
              href="https://github.com/dndanli"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <Link to="/" style={{ padding: "0px 0px 0px 5px" }}></Link>
            and
            <a
              style={{ paddingLeft: "5px" }}
              href="https://www.linkedin.com/in/daniel-de-lima-a07aa8223/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Home;

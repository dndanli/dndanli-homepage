import "../assets/css/fonts.css";
import { defaultStyle, mainStylesLight, headerStyle } from "./MainStyles";

const Main = () => {
  return (
    <div style={defaultStyle}>
      <div style={mainStylesLight}>
        <h1 style={headerStyle}>Daniel De Lima</h1>
        <div>
          <h4>
            Hey, I'm Daniel De Lima currently on my last semester at{" "}
            <a href="dmacc.edu">DMACC</a> majoring in Computer Information
            Systems.
          </h4>

          <h4>
            I ❤️ solving user-specific problems with code and creating fullstack
            applications.
          </h4>

          <h4>
            I'm currently seeking a job as a Software Engineer, so if you liked
            my projects and want to hire me, my contact info is right below and
            here is my <a href="dmacc.edu">Resume.</a>
          </h4>

          <h4>
            Find me on <a href="github.com/dndanli">GitHub</a>, and{" "}
            <a href="twitter.com/dndanli">Twitter</a>, mail me at{" "}
            <a href="dmacc.edu">Email</a>.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Main;

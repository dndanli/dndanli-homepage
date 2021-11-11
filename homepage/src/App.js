import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Layout/Navbar/Navbar.jsx";
import { StyledProjectPage } from "./Pages/Projects/MainProject.styles.js";

import { StyledHomePage } from "./Pages/Home/Home.style.js";
import "./App.css"
function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
      </div>
      <Switch>
        <Route path="/" component={StyledHomePage} exact></Route>
        <Route path="/projects" component={StyledProjectPage} exact></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Layout/Navbar/Navbar.jsx";
import Projects from "./Pages/Projects/MainProject.jsx";
import Home from "./Pages/Home/Home.jsx";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
      </div>
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/projects" component={Projects} exact></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

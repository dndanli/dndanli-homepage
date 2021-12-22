import { BrowserRouter, Route, Switch } from "react-router-dom";
import { StyledNav } from "./Components/Layout/Navbar/Navbar.styles.js";
import { StyledProjectPage } from "./Pages/Projects/MainProject.styles.js";
import { StyledHomePage } from "./Pages/Home/Home.style.js";
import { StyledCursor } from "./Components/Effects/Cursor.style.js";
function App() {
  return (
    <BrowserRouter basename="/dndanli-homepage">
      <StyledCursor />
      <div>
        <StyledNav />
      </div>
      <Switch>
        <Route path="/" component={StyledHomePage} exact></Route>
        <Route path="/projects" component={StyledProjectPage} exact></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

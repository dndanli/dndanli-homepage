import styled from "styled-components";
import Home from "./Home";

export const StyledHomePage = styled(Home)`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 3rem;
    font-family: "Montserrat", sans-serif;
  }

  h4{
    font-size:1.5rem;
  }

  .headerStyle {
    color: rgba(0,0,0,0.8);
  }

  .headerStyle a {
    font-family: Roboto, sans-serif;
    color: rgba(4, 4, 4, 1);
  }

  .homeLightTheme {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2em 2em 1em 2em;
    line-height: 2em;
    color: black;
    font-family: Montserrat, sans-serif;
    position: absolute;
    top: 5em;
  }
`;

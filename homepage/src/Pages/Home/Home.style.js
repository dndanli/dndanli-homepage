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
    font-size: 3em;
    font-family: "Montserrat", sans-serif;
  }

  .headerStyle {
    color: #fafefe;
  }

  .headerStyle a {
    font-family: Roboto, sans-serif;
    color: #828e82;
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

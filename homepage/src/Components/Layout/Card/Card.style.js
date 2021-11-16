import styled from "styled-components";
import Card from "./Card.jsx";

export const StyledCard = styled(Card)`
  height: 9em;
  padding: 1em;
  font-family: Montserrat, sans-serif;
  color: #cdd6d9;

  &:hover {
    background-color: #414141;
    transition: 0.5s all ease-in-out;
  }
`;

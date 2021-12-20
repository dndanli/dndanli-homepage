import styled from "styled-components";
import Card from "./Card.jsx";

export const StyledCard = styled(Card)`
  height: 9em;
  padding: 1em;
  font-family: Montserrat, sans-serif;
  color: rgba(0,0,0,0.8);

  &:hover {
    background-color: #f5eded;
    transition: 0.5s all ease-in-out;
  }
`;

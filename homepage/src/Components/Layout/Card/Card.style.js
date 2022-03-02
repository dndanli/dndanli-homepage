import styled from "styled-components";
import Card from "./Card.jsx";

export const StyledCard = styled(Card)`
  height: 17rem;
  padding: 1rem;
  font-size: 1.2rem;
  font-family: Montserrat, sans-serif;
  color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  border-radius: 8px;
  img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 8px;
  }
  .card-info {
    color: rgb(255, 254, 252);
    margin-top: 5rem;
    position: absolute;
    display: none;
    text-align: center;
  }
  &:hover {
    background-color: #f5eded;
    transition: 0.5s all ease-in-out;
    background-color: rgba(52, 50, 53, 1);
    .project-img {
      opacity: 0.3;
    }
    .card-info {
      display: block;
    }
  }
`;

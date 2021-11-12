import styled from 'styled-components'
import Card from './Card.jsx';

export const StyledCard = styled(Card)`
    height:9em;
    padding:1em;    
    background-color: #F1F5F2;
    font-family: Montserrat, sans-serif;
    color: #31393C;


    &:hover{
        background-color: #e7eee8;
        transition: 0.5s all ease-in-out;
    }
`;
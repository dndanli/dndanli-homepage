import styled from 'styled-components'
import MainProject from './MainProject.jsx'

export const StyledProjectPage = styled(MainProject)`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F1F5F2;
    
    .headerStyle{
        font-family: Roboto, sans-serif;
    }

    .cards{
        margin: 5rem auto;
        display: grid;
        grid-template-columns: 50% 50%;
        grid-gap: 1em;
    }
`;
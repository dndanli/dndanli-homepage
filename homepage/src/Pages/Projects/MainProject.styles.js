import styled from 'styled-components'
import MainProject from './MainProject.jsx'

export const StyledProjectPage = styled(MainProject)`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;

    .headerStyle{
        color: #cdd6d9;
        font-family: Roboto, sans-serif;
        position: absolute;
        top:2.5em;
    }

    .cards{
        margin: 5rem auto;
        display: grid;
        grid-template-columns: 50% 50%;
        grid-gap: 1em;
        position: absolute;
        top:6em;
    }
    
`;
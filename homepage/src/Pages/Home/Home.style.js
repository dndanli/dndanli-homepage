import styled from 'styled-components'
import Home from './Home';

export const StyledHomePage = styled(Home)`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    .headerStyle{
        color: #cdd6d9;
        font-family: Roboto, sans-serif;
    };

    .headerStyle a{
        color:#cdd6d9;
    }

    .homeLightTheme{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 2em 2em 1em 2em;
        line-height: 2em;
        /* background-color: #000000; */
        /* background-image: linear-gradient(147deg, #000000 0%, #434343 74%); */
        color: black;
        font-family: Montserrat, sans-serif;
        position: absolute;
        top: 5em;
    };
`;
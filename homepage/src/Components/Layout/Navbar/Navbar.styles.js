import styled from 'styled-components'
import Navbar from './Navbar'
import { device } from '../../../Helpers/Devices';

export const StyledNav = styled(Navbar)`
    
    display: flex;
    justify-content: flex-end;
    min-height: 5vh;

    .menu__icon{
        position: absolute;
        right: 1em;
        top:1em;
        font-size: 1.3em;
        display: none;
    };

    .navbar__nav{
        margin:0;
        padding: 0em;
        display: flex;
        font-family: Montserrat, sans-serif;
        visibility: visible;
    };

    .navbar__nav li{
        margin: 1em;
    }

    @media ${device.mobileL}{
        .menu__icon{
            display: block;
        };
        .navbar__nav{
            visibility: hidden;
        }
    }

    
    .slide__nav{
        background-color: #d4e5e2;
        font-family: Montserrat, sans-serif;
        font-size: 1.1em;
        padding: 1em;
        position: absolute;
        width: 6em;
        min-height: 12vh;
        top: 2em;
        right: 1.6em;
        border-radius: .5em;
        transition: 200ms ease;
        z-index:1
    }
    
    .slide__nav li{
        margin: .5em;
    }

    .inner__container a{
        color:black;
        text-decoration: none;
    };

    .inner__container li{
        list-style-type: none;
    }
`;
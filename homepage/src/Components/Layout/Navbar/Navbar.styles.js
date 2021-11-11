import styled from 'styled-components'
import Navbar from './Navbar'
import { device } from './NavbarSizes';

export const StyledNav = styled(Navbar)`
    
    display: flex;
    justify-content: flex-end;
    min-height: 5vh;

    .menu__icon{
        right: 1em;
        font-size: 1.3em;
        position: absolute;
        top:1em;
        display: none;
    };

    .nav__item{
        margin:0;
        padding: 0em;
        display: flex;
    };

    .nav__item li{
        margin: 1em;
    }

    @media ${device.mobileL}{
        .menu__icon{
            display: block;
        };
        .nav__item{
            visibility: hidden;
        }
    }
 
    .slide__item{
        transition: 200ms ease;
        background-color: grey;
        width: 20vw;
        min-height: 10vh;
        margin: 1em;
        padding: 1em;
        position: absolute;
        top: 2em;
        right: 1.6em;
        border-radius: .5em;
        z-index: 1;
        visibility: "";
    }

    .inner__container a{
        color:black;
        text-decoration: none;
    };

    .inner__container li{
        list-style-type: none;
    }
`;
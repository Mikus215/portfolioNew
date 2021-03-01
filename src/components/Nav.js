import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Nav = () => {
    return ( 
        <StyledNav>
                <h1> 
                    <Link to="/"> Home </Link>
                </h1>
                <ul>
                    <li>
                        <Link to="/"> About me </Link>
                    </li>
                    <li>
                        <Link to="/projects"> Projects </Link>
                    </li>
                    <li>
                        <Link to="/contact"> Contact me </Link>
                    </li>
                </ul>
        </StyledNav>
     );
}

const StyledNav = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-height: 10vh;
    width: 100%;
    background-color: #282828;
    a{
        color: white;
        text-decoration: none;
    }
    h1{
        font-size: 1.8rem;
        font-family: Akaya Telivigala;
    }
    ul{
        display: flex;
        list-style: none;
        li{
            font-size: 1.2rem;
            margin: 0rem 1rem;
            font-weight: bold;
            padding: 1rem;
        }
    }
`;

export default Nav;
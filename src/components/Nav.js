import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import {motion} from 'framer-motion';

const Nav = () => {
    const {pathname} = useLocation();
    console.log(pathname);
    return ( 
        <StyledNav>
                <h1> 
                    <Link to="/"> Home </Link>
                </h1>
                <ul>
                    <li>
                        <Link to="/"> About me </Link>
                        <Line
                        transition={{duration: .75}}
                        initial={{width: "0%"}}
                        animate={{width: pathname==="/" ? "100%" : "0%"}}
                        />

                    </li>
                    <li>
                        <Link to="/projects"> Projects </Link>
                        <Line
                        transition={{duration: .75}}
                        initial={{width: "0%"}}
                        animate={{width: pathname==="/projects" ? "100%" : "0%"}}
                        />
                    </li>
                    <li>
                        <Link to="/contact"> Contact me </Link>
                        <Line
                        transition={{duration: .75}}
                        initial={{width: "0%"}}
                        animate={{width: pathname==="/contact" ? "100%" : "0%"}}
                        />
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
    position: sticky;
    top: 0;
    z-index: 10;
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
            position: relative;
        }
    }
`;
const Line = styled(motion.div)`
 height: .3rem;
 background: #23d997;
 width: 0%;
 position: absolute;
 bottom: 0%;
 left: 0%;
 @media(max-width: 1300px){
     left: 0;
 }
`;
export default Nav;
import React,{useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import {motion} from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
    const {pathname} = useLocation();
    const windowWidth = window.innerWidth;
    const [navShow,setNavShow] = useState(false);
    const navActive = ()=> {
        setNavShow(!navShow);
    }
    return ( 
        <>
        <FontAwesomeIcon icon={faBars} className={windowWidth<=600 ? "show":"hide"} size="3x" onClick={navActive}/>
        <StyledNav className={navShow===true ? "showNav" : ""}>
                <h1> 
                    <Link to="/" onClick={navActive}> Home </Link>
                </h1>
                <ul>
                    <li>
                        <Link to="/" onClick={navActive}> About me </Link>
                        <Line
                        transition={{duration: .75}}
                        initial={{width: "0%"}}
                        animate={{width: pathname==="/" ? "100%" : "0%"}}
                        />

                    </li>
                    <li>
                        <Link to="/projects" onClick={navActive}> Projects </Link>
                        <Line
                        transition={{duration: .75}}
                        initial={{width: "0%"}}
                        animate={{width: pathname==="/projects" ? "100%" : "0%"}}
                        />
                    </li>
                    <li>
                        <Link to="/contact" onClick={navActive}> Contact me </Link>
                        <Line
                        transition={{duration: .75}}
                        initial={{width: "0%"}}
                        animate={{width: pathname==="/contact" ? "100%" : "0%"}}
                        />
                    </li>
                </ul>
        </StyledNav>
        </>
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
    @media(max-width: 600px){
        flex-direction: column;
        justify-content: center;
        height: 100vh;
        width: 100%;
        position: fixed;
        transform: translateX(-100%);
        opacity: 0;
        transition: transform .5s cubic-bezier(0.645, 0.045, 0.355, 1),opacity .5s cubic-bezier(0.77, 0, 0.175, 1);
        ul{
            flex-direction: column;
            text-align: center;
            li{
                a{
                    display: inline-block;
                    padding: 1.4rem;
                }
            }
        }
    }
    a{
        color: white;
        text-decoration: none;
    }
    h1{
        font-size: 1.8rem;
        font-family: Akaya Telivigala;
        padding: 2rem;
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
 @media(max-width: 600px){
     bottom: 20%;
 }
`;
export default Nav;
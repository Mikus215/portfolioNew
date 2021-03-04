import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {fade} from '../animation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPaste} from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare,faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
const Contact = () => {
    return ( 
        <ContactStyled variants={fade} initial="hidden" animate="show">
            <h1>Contact</h1>
            <Line></Line>
            <Info>
                <p>My e-mail:</p> <p>mikimarsz215@gmail.com</p>
                <p>My phone number:</p> <p>574-499-047</p>
                <Icons>
                <a href="https://www.facebook.com/mikimarsz/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebookSquare} /></a>
                <a href="https://github.com/Mikus215" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithubSquare} /></a>
                <a href="https://drive.google.com/file/d/1QK7hJaEhMI2QXa7y9q0825Uj6PHo39EE/view?usp=sharing" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faPaste} /></a>
                </Icons>
            </Info>
        </ContactStyled>
     );
}

const ContactStyled=styled(motion.div)`
display: flex;
flex-direction: column;
align-items: center;
color: white;
padding: 3rem 1rem;
min-height: 90vh;
`;
const Info=styled(motion.div)`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    margin-top: 2rem;
    p{
        font-size: 1.2rem;
        margin-top: 1rem;
    }
    
`;
const Icons=styled(motion.div)`
display: flex;
justify-content: center;
margin-top: 1rem;
a{     
    padding: 1rem;
    color: white;
    font-size: 2rem;
    }
`;
const Line=styled.div`
height: .3rem;
width: 150px;
background: rgb(6, 121, 193);
border-radius: 10px;
margin-top: .4rem;
`;


export default Contact;
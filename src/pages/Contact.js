import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
const Contact = () => {
    return ( 
        <ContactStyled>
            <h1>Contact</h1>
            <Line></Line>
            <Info>
                <p>My e-mail: <p>mikimarsz215@gmail.com</p></p>
                <p>My phone number: <p>574-499-047</p></p>
                <Icons>
                <a href="https://www.facebook.com/mikimarsz/" target="_blank"><i class="fab fa-facebook-square class" ></i></a>
                <a href="https://github.com/Mikus215" target="_blank"><i class="fab fa-github-square class"></i></a>
                <a href="https://drive.google.com/file/d/1QK7hJaEhMI2QXa7y9q0825Uj6PHo39EE/view?usp=sharing" target="_blank"><i class="fas fa-paste"></i></a>
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
i{     
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
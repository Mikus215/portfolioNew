import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {fade} from '../animation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPaste} from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
const AboutMePage = () => {
    return ( 
        <About variants={fade} initial="hidden" animate="show">
            <Text>
                
                <p>
                    Hello, my name is Mikołaj Marszałek. I'm 20 years old. 
                    I am not afraid of new challenges. I'm currently learning React. 
                    I am improving my front-end skills and still learning new things. 
                </p>
                <p> 
                    I would like to work with more experienced people, to learn from them, and develop my skills. 
                    I also like watching TV series, playing games and doing any sport. 
                    Sometimes I read books. I could work in an office in Katowice, close to the area or remotely.
                    
                    My CV: <a href="https://drive.google.com/file/d/1QK7hJaEhMI2QXa7y9q0825Uj6PHo39EE/view?usp=sharing" target="_blank"  rel="noopener noreferrer"><FontAwesomeIcon icon={faPaste} /></a>
                </p>
                <p>
                I made my portfolio by programming in react.
                Code:  <a href="https://github.com/Mikus215/portfolioNew" target="_blank"  rel="noopener noreferrer"><FontAwesomeIcon icon={faGithubSquare} /></a>
                </p>
            </Text>
            <Skills>
                <Skill><p>HTML</p></Skill>
                <Skill><p>CSS</p></Skill>
                <Skill><p>SCSS (BEM)</p></Skill>
                <Skill><p>JavaScript (ES6+)</p></Skill>
                <Skill><p>React</p></Skill>
                <Skill><p>SASS</p></Skill>
                <Skill><p>Git</p></Skill>
                <Skill><p>GitHub</p></Skill>
                <Skill><p>API</p></Skill>
                <Skill><p>RWD</p></Skill>
                <Skill><p>GASP</p></Skill>
            </Skills>
        </About>
     );
}

const About = styled(motion.div)`
    display: flex;
    width: 100%;
    height: 90vh;
    padding: 3rem 6rem;
    @media(max-width: 800px){
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        padding: 4rem 1.2rem;
        height: 100%;
    }
`;
const Text = styled.div`
    width: 50%;
    font-size: 1.6rem;
    @media(max-width: 800px){
        width: 100%;
    }
    p{
        margin-bottom: 2rem;
    }
    a{     
    padding: 1rem;
    color: white;
    font-size: 2.2rem;
    }
`;
const Skills = styled.div`
    width: 50%;
    margin-left: 4rem;
    font-weight: bold;
    @media(max-width: 800px){
        width: 100%;
        margin-left: 0;
    }
`;
const Skill=styled.div`
text-align: center;
    p{
        border-radius: 8px;
        border: 3px solid rgb(6, 121, 193);
        padding: .4rem;
        margin: 1rem;
        font-size: 1.5rem;
    }
`;
 
export default AboutMePage;
import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {fade} from '../animation';

const AboutMePage = () => {
    return ( 
        <About variants={fade} initial="hidden" animate="show">
            <p> 
                Hello, my name is Mikołaj Marszałek. I'm 20 years old. 
                I am not afraid of new challenges. I'm currently learning React. 
                I am improving my front-end skills and still learning new things. 
                I would like to work with more experienced people, to learn from them, and develop my skills. 
                I also like watching TV series, playing games and doing any sport. 
                Sometimes I read books. I could work in an office in Katowice, close to the area or remotely. 
                My CV: <a href="https://drive.google.com/file/d/1QK7hJaEhMI2QXa7y9q0825Uj6PHo39EE/view?usp=sharing" target="_blank" class="links"><i class="fas fa-paste"></i></a>
            </p>
        </About>
     );
}

const About = styled(motion.div)`
    width: 100%;
    height: 90vh;
    padding: 3rem 10rem;
`;
 
export default AboutMePage;
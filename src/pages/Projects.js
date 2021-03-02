import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';

const Projects = () => {
    return ( 
        <ProjectsStyled>
            <h1>Projects</h1>
            <Cards>
                <Card>
as
                </Card>
            </Cards>
        </ProjectsStyled>
     );
}

const ProjectsStyled = styled(motion.div)`
display: flex;
flex-direction: column;
h1{
    margin-top: 2rem;
    text-align: center;
}
`;
const Cards = styled(motion.div)`
display: flex;
flex-wrap: wrap;
padding: 3rem 10rem;

`;

const Card = styled(motion.div)`

`;
 
export default Projects;
import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';

const Projects = () => {
    return ( 
        <ProjectsStyled>
        <h1>Projects</h1>
        </ProjectsStyled>
     );
}

const ProjectsStyled = styled(motion.div)`
display: flex;
`;
 
export default Projects;
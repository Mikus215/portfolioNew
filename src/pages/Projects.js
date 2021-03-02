import React,{useState} from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {ProjectsState} from '../ProjectsDes';
import Card from '../components/Card';

const Projects = () => {
    const [projectsDetail,setProjectsDetail] = useState(ProjectsState)
     
    return ( 
        <ProjectsStyled>
            <h1>Projects</h1>
            <Line></Line>
            <Cards>
                {projectsDetail.map(el=> <Card title={el.title} img={el.mainImg} live={el.live} github={el.github} description={el.description} key={el.title}/>   )}
            </Cards>
        </ProjectsStyled>
     );
}

const ProjectsStyled = styled(motion.div)`
display: flex;
flex-direction: column;
align-items: center;
h1{
    margin-top: 3rem;
    text-align: center;
}
`;
const Cards = styled(motion.div)`
display: flex;
flex-wrap: wrap;
padding: 3rem 8rem;
@media(max-width:1500px){
    padding: 0rem;
}
`;
const Line=styled.div`
    height: .3rem;
    width: 150px;
    background: rgb(6, 121, 193);
    border-radius: 10px;
    margin-top: .4rem;
`;


 
export default Projects;
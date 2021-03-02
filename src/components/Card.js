import React from 'react';
import styled from 'styled-components';

const Card = ({title,img,live,github,description}) => {
    return ( 
        <StyledCard>
            <h1>{title}</h1>
            <Line></Line>
            <a href={live} target="_blank" rel="noopener noreferrer"><img src={img} alt=""/></a>
            <SpaceBetweenA>
                <a href={live} target="_blank" rel="noopener noreferrer"><span>Live: </span><i class="fas fa-globe-americas"></i></a>
                <a href={github} target="_blank" rel="noopener noreferrer"><span>Code: </span><i class="fas fa-code"></i></a>
            </SpaceBetweenA>
            <p>{description}</p>
        </StyledCard>
     );
}

const StyledCard=styled.div`
display: flex;
flex-direction: column;
/* justify-content: center; */
align-items: center;
padding: 3rem 6rem;
@media(max-width: 1500px){
    padding: 2rem 1rem;
}
h1{
    text-align: center;
}
img{
    display: flex;
    /* align-items: center; */
    justify-content: center;
    object-fit: cover;
    width: 100%;
}
p{
        font-size: 1.6rem;
    }
`;
const SpaceBetweenA=styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 1rem 0;
    a{
        text-decoration: none;
        color: white;
        font-size: 2rem;
    }
    
`;
const Line=styled.div`
    height: .3rem;
    width: 150px;
    background: #23d997;
    border-radius: 10px;
    margin-top: .3rem;
    margin-bottom: 2rem;
`;
 
export default Card;
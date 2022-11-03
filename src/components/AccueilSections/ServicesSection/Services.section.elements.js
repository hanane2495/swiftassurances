import styled from "styled-components";

export const Services = styled.div`
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
color : #fff;
padding: 100px 0;
height: 1000px;
background:#200752;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media screen and (max-width: 768px){
    height: 1500px;
}

@media screen and (max-width: 480px){
    height: 1500px;
}
`


export const Title = styled.img`
max-width: 100%;
max-height: 200px;
margin-bottom: 50px;
`

export const ServicesWrapper = styled.div`
max-width: 1200px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
grid-gap: 16px;
padding: 0 20px;

@media screen and (max-width: 1000px){
    grid-template-columns: 1fr 1fr;
}

@media screen and (max-width: 768px){
    grid-template-columns: 1fr;
    padding:0 20px;
}
`

export const ServiceCard =  styled.div`
background: none;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
text-align: center;
max-height: 500px;
transition: all 0.2s ease-in-out;

&:hover{
    transform: scale(1.02);
    transition: all 0.3s ease-in-out;
    cursor: pointer;
}
`

export const IconWrapper = styled.div`
height: 150px;
`

export const TextWrapper = styled.div`
height: 200px;

`

export const ServiceIcon = styled.img`
height: 100px;
width: 100px;
margin-bottom: 10px;
`

export const ServiceTitle = styled.h2`
font-size: 1.8rem;
color: #fff;
margin-bottom: 20px;
font-weight: 700;

@media screen and (max-width: 480px) {
    font-size: 1.5rem;
}
`

export const ServiceDescription = styled.p`
font-weight: 400;
font-size: 1rem;
text-align: center;
`
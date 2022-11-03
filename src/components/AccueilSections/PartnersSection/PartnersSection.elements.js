import styled from "styled-components";

export const Partners = styled.div`
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
padding: 100px 0;
height: 500px;
background:#fff;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;

@media screen and (max-width: 768px){
    height: 900px;
}

@media screen and (max-width: 480px){
    height: 900px;
}
`

export const Title = styled.h1`
color: #200752;
line-height: 1.3;
font-size: 3rem;
font-weight: 700;
`

export const Subtitle = styled.h2`
color: #888;
opacity : 0.7;
line-height: 1.3;
font-size: 1.5rem;
font-weight: 700;
`

export const PartnersRaw = styled.div`
max-width: 1200px;
margin: 50px auto;
display: grid;
justify-content: center;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
align-items: center;
grid-gap: 16px;
padding: 0 20px;

@media screen and (max-width: 1000px){
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
}

@media screen and (max-width: 768px){
    grid-template-columns: 1fr 1fr;
    padding:0 20px;
}
`
export const PartnerWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
export const PartnerImage = styled.img`
height: 100px;
width: 100px;
&:hover{
    transform: scale(1.2);
    transition: all 0.3s ease;
    cursor: pointer;
}
`
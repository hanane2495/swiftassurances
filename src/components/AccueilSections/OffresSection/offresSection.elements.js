import styled from "styled-components";

export const Offres = styled.div`
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
color : #fff;
padding: 100px 0;
height: 800px;
background:#eee;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media screen and (max-width: 1000px){
    height: 1100px;
}

@media screen and (max-width: 480px){
    height: 1600px;
}
`

export const OffresWrapper = styled.div`
max-width: 1200px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
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

export const OffreCard = styled.div`
background: #fff;
border-radius: 20px;
box-shadow: 25px 27px 75px -45px rgba(0,0,0,0.73);
-webkit-box-shadow: 25px 27px 75px -45px rgba(0,0,0,0.73);
-moz-box-shadow: 25px 27px 75px -45px rgba(0,0,0,0.73);
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

export const IconWrapper =  styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 300px;

@media screen and (max-width: 768px){
    height: 200px;
}
`

export const TextWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 250px;

@media screen and (max-width: 768px){
    height: 200px;
}
`

export const OffreIcon = styled.img`
height: 200px;
width: 200px;
margin-bottom: 10px;
`

export const OffreTitle = styled.p`
font-size: 2rem;
font-weight: 500;
color :#888;
padding-top: 50px;
`
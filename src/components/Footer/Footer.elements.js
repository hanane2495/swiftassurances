import styled from "styled-components";

export const FooterWrapper = styled.div`
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
color : #fff;
padding: 20px 0;
height: 600px;
background:#200752;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media screen and (max-width: 1000px){
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 1500px;
}

@media screen and (max-width: 480px){
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 1500px;
}
`

export const FooterRaw = styled.div`
max-width: 1200px;
height: 500;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: flex-start;
grid-gap: 50px;
padding: 0 20px;

@media screen and (max-width: 1000px){
    grid-template-columns: 1fr;
}

@media screen and (max-width: 768px){
    grid-template-columns: 1fr;
    padding:0 20px;
}
`

export const FooterColumn =  styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
align-content: flex-start;
height: 400px;
transition: all 0.2s ease-in-out;


&:hover{
    transform: scale(1.02);
    transition: all 0.3s ease-in-out;
    cursor: pointer;
}

@media screen and (max-width: 1000px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 100px;
}

@media screen and (max-width: 480px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0;
}
`

export const Logo = styled.div`
justify-self: flex-start;
cursor: pointer;
text-decoration: none;
display: flex;
align-items: center;
`

export const Description = styled.p`
font-size: 1rem;
margin: 0 0 20px 0;
padding: 0;
`

export const SectionsList = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
margin-bottom: 50px;
`

export const ListItem = styled.li`
text-decoration: none;
list-style: none;
color: #07E909;
`

export const CallToAction = styled.div``

export const Title = styled.h1`
font-size: 2.5rem;
font-weight: 600;
`

export const ContactForm = styled.form`
padding: 0;
width: 100%;
`

export const Name = styled.input`
width: 100%;
height: 50px;
padding: 10px;
margin-bottom: 20px;
border-radius: 10px;
background: none;
border: 2px solid #07E909;
color: #fff;
`

export const Message = styled.textarea`
width: 100%;
height: 140px;
padding: 10px;
margin-bottom: 20px;
border-radius: 10px;
background: none;
border: 2px solid #07E909;
color: #fff;
`

export const ContactButton = styled.button`
display: flex;
flex-direction: row;
border-radius: 10px;
width: fit-content;
background : #07E909;
white-space: nowrap;
padding:${({big}) => (big ? '12px 64px' : '10px 20px')};
color: #fff;
font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
outline: none;
border:none;
cursor: pointer;

&:hover{
    transition: all 0.3s ease-out;
    background: #200752;
    background : ${({primary}) => (primary ? '#BFF4F8' : '#200752')};
}

@media screen and (max-width: 960px) {
    width: 50%;
}
`
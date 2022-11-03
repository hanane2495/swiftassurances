import styled from "styled-components";
import { Link } from "react-router-dom";

export const SignInSignUpContainer = styled.div`
position: relative;
width: 100%;
height: 100vh;
overflow: hidden;

&::before{
    content: '';
    position: absolute;
    width: 2000px;
    height: 2000px;
    border-radius: 50%;
    background: linear-gradient(-45deg, #200752, #5320BA);
    top: -10%;
    right: 48%;
    transform:translateY(-50%);
    z-index:6;
}
`



export const SignIn_SignUp = styled.div`
position: absolute;
top:50%;
left: 75%;
padding: 0 5rem;
overflow: hidden;
transform: translate(-50%, -50%);
width: 50%;
display: grid;
grid-template-columns: 1fr;
z-index: 5;
`


//SignIn elements



export const SignInForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0rem 5rem;
  transition: all 0.2s 0.7s;
  overflow: hidden;
  grid-column: 1 / 2;
  grid-row: 1 / 2;

  z-index: 2;
`

export const Title = styled.h1`
color : #555;
font-size: 3rem;
font-weight: 700;
font-family: 'Raleway';

@media screen and (max-width: 870px){
    font-size: 2rem;
}

@media screen and (max-width: 570px){
    font-size: 2rem;
}
`

export const InputWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: flex-start;
background: #eee;
margin : 5px 0;
padding: 0;
width: 100%;
border-radius: 30px;
`

export const IconContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
align-content: center;
width: 15%;
height:40px;
`

export const Input = styled.input`
border: none;
background: none;
width: 85%;
height: 40px;
margin-left: 10px;

&:focus{
    outline: none;
    background: none;
}

&:active{
    background: none;
}
`

export const ConnectButton = styled.button`
border-radius: 30px;
background : #07E909;
white-space: nowrap;
padding:${({big}) => (big ? '12px 64px' : '10px 20px')};
color: #fff;
font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
outline: none;
border:none;
cursor: pointer;
margin-top: 10px;

&:hover{
    transition: all 0.3s ease-out;
    background: #200752;
    background : ${({primary}) => (primary ? '#BFF4F8' : '#200752')};
}

@media screen and (max-width: 960px) {
    width: 50%;
}
`

//SignUp elements
export const SignUpForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0rem 5rem;
  transition: all 0.2s 0.7s;
  overflow: hidden;
  grid-column: 1 / 2;
  grid-row: 1 / 2;


  opacity: 0;
  z-index: 1;
`

export const InscriptionRow4 = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
align-items: center;
grid-gap: 10px;
width: 100%;
@media screen and (max-width: 870px){
    grid-template-columns: 1fr 1fr;
}

@media screen and (max-width: 570px){
    grid-template-columns: 1fr 1fr;
    padding:0 20px;
}
`

export const InscriptionRow2 = styled.div`
display: flex;
flex-direction: column;
width:100%;

@media screen and (max-width: 870px){
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-gap: 10px;
    width:100%;
}
@media screen and (max-width: 570px){
    grid-template-columns: 1fr;
    padding:0 20px;
}
`

export const InscriptionRow3 = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
grid-gap: 10px;
width:100%;

`

//panel

export const PanelsContainer = styled.div`
position: absolute;
width: 100%;
height:100%;
top: 0;
left:0 ;
display: grid;
grid-template-columns: repeat(2, 1fr);
`



//left panel
export const LeftPanel = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
justify-content: space-around;
text-align: center;
z-index: 7;

pointer-events: all;
padding: 3rem 17% 2rem 12%;
`

export const Content = styled.div`
transition: .9s .6s ease-in-out;
`


export const SignUpSignInTitle = styled.h3`
color: #fff;
font-size: 2rem;
font-weight: 600;
font-family: 'Raleway';
@media screen and (max-width: 870px){
    font-size: 1.5rem;
}

@media screen and (max-width: 570px) {
    font-size: 1rem;
}
`

export const Description = styled.p`
color: #fff;
@media screen and (max-width: 870px){
    font-size: 0.8rem;
}

@media screen and (max-width: 570px) {
    font-size: 0.7rem;
}
`

export const SignUpBtn = styled.button`
border-radius: 30px;
white-space: nowrap;
background: none;
padding:${({big}) => (big ? '12px 64px' : '10px 20px')};
color: #07E909;
font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
outline: none;
border:solid 2px #07E909;
cursor: pointer;

@media screen and (max-width: 870px){
    padding: 10px;
    font-size: 1rem;
}

@media screen and (max-width: 570px) {
    padding: 10px;
    font-size: 0.8rem;
}

&:hover{
    transition: all 0.3s ease-out;
    background: #200752;
    background : ${({primary}) => (primary ? '#BFF4F8' : '#200752')};
}
`

export const DecorationImage = styled.img`
width: 100%;
transition: 1.1s 4s ease-in-out;
`


//right panel
export const RightPanel = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
justify-content: space-around;
text-align: center;
z-index: 7;

pointer-events: none;
padding: 3rem 12% 2rem 17%;
`

export const DecorationImage1 = styled.img`
width: 100%;
transform: translateX(800px);
`

export const Content1 = styled.div`
transform:translateX(800px)
`








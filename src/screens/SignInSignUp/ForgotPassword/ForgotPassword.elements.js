import styled from "styled-components";

export const Card = styled.div`
max-width: 1200px;
height: 700;
margin: 100px auto;
display: grid;
grid-template-columns: 1fr 1fr;
grid-gap: 0;
justify-content: center;
align-items: center;
padding: 100px auto;


@media screen and (max-width: 960px){
    grid-template-columns: 1fr;
    background-image: linear-gradient(-45deg, #200752 0%, #5320BA 100%);
    border-radius: 0 100px 0 100px;
    padding: 0;
    width: 100%;
    height: 90vh;
    margin: 0;
}
`

export const CardTitle = styled.h1`
color : #fff;
font-size: 2rem;
text-align: center;
font-weight: 700;
font-family: 'Raleway';

@media screen and (max-width: 960px){
    font-size: 1.8rem;
}

@media screen and (max-width: 570px){
    font-size: 1rem;
}
`

export const CardLeftColumn = styled.div`
height: 100%;
padding: 50px;
@media screen and (max-width: 960px){
    padding: 0 100px;
    height: 80%;
    border-bottom: #fff solid 3px;

}
@media screen and (max-width: 570px){
    padding: 50px 20px 0 20px ;
    height: 80%;
}
`

export const CardRightColumn = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 100%;
padding: auto 20px;
background-image: linear-gradient(-45deg, #200752 0%, #5320BA 100%);
border-radius: 0 100px 0 100px;

@media screen and (max-width: 960px){
    padding: 0 50px;
    background-image: none;
    border-radius: 0;
    align-items: flex-start;
}

@media screen and (max-width: 570px){
    padding: 0;
    height: 80%;
}
`

export const ForgotPasswordImage = styled.img`
padding-right: 0;
border: 0;
max-width: 100%;
vertical-align: middle;
display: inline-block;
max-height: 500px;

@media screen and (max-width: 960px){
    max-width: 100%;
    max-height: 300px;
}
`

export const ForgotPasswordForm = styled.form`

@media screen and (max-width: 960px){
    width: 100%;
}
`


export const RegisterButton = styled.button`
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
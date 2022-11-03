import styled, {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Source sans pro', sans-serif;
}
`

export const Container = styled.div`
z-index: 1;
width:100%;
max-width:1200px ;
margin-left: auto;
margin-right: auto;
padding-right: 30px;
padding-left: 30px;


@media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
}

`

export const Button =  styled.button`
border-radius: 4px;
background : ${({primary}) => (primary ? '#200752' : '#BFF4F8')};
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
    width: 100%;
}
`

export const CallToActionButton =  styled.button`
border-radius: 10px;
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

export default GlobalStyle;

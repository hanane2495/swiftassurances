import styled from "styled-components";

export const LightDesc = styled.p`
font-size: 1rem;
color: #333;
font-weight: 300;
font-family: 'Raleway';
margin: 1%;

@media screen and (max-width: 780px) {
font-size : 0.7rem;
}
`

export const SearchBox = styled.div`
width: 100%;
height:40px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: flex-start;

@media screen and (max-width: 780px) {
    width: 100%;
}
`


export const SearchInput = styled.input`
background: #fff;
border-radius: 8px;
border: none;
color: #555;
height: 100%;
width: 80%;
font-size: 1rem;
padding: 1% 3%;
&:active{
    border: none;
    text-decoration: none;
}

@media screen and (max-width: 780px) {
    height: 80%;
}
`

export const SearchButton = styled.button`
border-radius: 5px;
background : #200752;
white-space: nowrap;
height: 100%;
width:18%;
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

@media screen and (max-width: 780px) {
    font-size: 0.6rem;
    font-weight: 600;
    height: 70%;
}

`
import styled from "styled-components";
import {Link} from 'react-router-dom'


export const CardContainer = styled.div`
width: 100%;
height:100%;
display: flex;
flex-direction: row;

`

export const ImageWrapper = styled.div`
width:50%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;

@media screen and (max-width: 780px){
    width: 30%;
}
`

export const CradImage = styled.img`
width:150px;
height: 150px;

@media screen and (max-width: 1200px) {
    width:130px;
    height: 130px;
}

@media screen and (max-width: 780px) {
    width:120px;
    height: 120px;
}
`

export const ContentWrapper = styled.div`
width:50%;
height: 100%;
padding : 10px 5px;
@media screen and (max-width: 760px) {
    width:70%;
}
`

export const CardTitle = styled.h2`
font-size: 1.2rem;
color:#200752;
font-family: 'Raleway';
font-weight: 600;

@media screen and (max-width: 1200px) {
    font-size: 1rem;
}

@media screen and (max-width: 760px) {
    font-size: 0.8rem;
}

`

export const CardDesc = styled.p`
font-size: 0.8rem;
color:#999;
font-family: 'Raleway';

`

export const CardBtn = styled.button`
padding : 3px 15px;
margin-top: 10px;
background: #07E909;
color: #fff;
border-radius: 10px;
font-size: 0.9rem;
border: none;
`


export const CardLink = styled(Link)`
color : #fff;
display: flex;
flex-direction: row;
text-decoration : none;
cursor : pointer;

&:hover{
    text-decoration-line: none;
}

`




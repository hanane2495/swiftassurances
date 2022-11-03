import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const RapportContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: flex-start;
padding:5% 2%;
margin-top: 10px;

    @media screen and (max-width: 1000px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding:0;
        margin-top: 100px;
    }
`

export const ReportCard = styled.div`
background: #fff;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 50px 20px;
border-radius: 10px;
width: 48%;
transition: all 0.5s ease-in-out;

box-shadow: 15px 8px 53px -13px rgba(0,0,0,0.3);
-webkit-box-shadow: 15px 8px 53px -13px rgba(0,0,0,0.3);
-moz-box-shadow: 15px 8px 53px -13px rgba(0,0,0,0.3);

&:hover{
    transform: scale(1.04);
}

@media screen and (max-width: 1000px){
        width: 95%;
        padding: 15px 10px;
        margin-top: 20px;
        flex-direction: column;
    }

`

export const Title = styled.h3`
color: #200752;
`

export const CardCol = styled.div`
display: flex;
flex-direction: column;
`

export const CardIcon = styled.img`
width: 150px;
height: 150px;

@media screen and (max-width: 1000px){
    height: 100px;
    width: 100px;
    }
` 

export const ButtonsWrapper = styled.div`

@media screen and (max-width: 1000px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    }
` 

export const CardBtn = styled(Link)`
padding :10px 15px;
margin-right: 15px;
color: #fff;
border-radius:10px;

@media screen and (max-width: 1000px){
    padding :5px 10px;
    width: 100%;
    margin-top: 10px;
    margin-right: 0;
    }

`

export const Input = styled.select`
width: 100%;
padding: 10px;
background: #eee;
border: none;
text-decoration: none;
border-radius: 10px;
margin-bottom: 20px;
`

export const OptionInput = styled.option``
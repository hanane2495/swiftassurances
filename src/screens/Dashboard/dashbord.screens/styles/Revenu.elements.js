import styled from 'styled-components'


export const RevenuWrapper = styled.div`
padding: 1%;
margin-top: 10px;
`

export const RevenuContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: flex-start;
padding: 10px 20px;
width:100%;
background: #fff;
border-radius: 10px;

@media screen and (max-width: 1000px){
    flex-direction: column-reverse;
}
` 

export const BigTitle = styled.h3`
font-size: 1.5rem;
font-family: 'Raleway';
font-weight: 600;
color: #200752;
`
export const InfoColumn = styled.div`
border-right: solid 1px #888;
width: 60%;

@media screen and (max-width: 1000px){
    width: 100%;
    border-top: solid 1px #888;
    border-right: none;
    margin-top: 20px;
    padding-top: 10px;
}
`

export const Title = styled.h3`
font-size: 1.2rem;
font-family: 'Raleway';
font-weight: 600;
color: #200752;
`
export const Desc = styled.p`
font-size: 1rem;
font-family: 'Raleway';
font-weight: 500;
color: #888;
`
export const FormContainer = styled.form`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
padding: 0;
`
export const InfoInput = styled.input`
padding: 8px 10px;
margin: 5px 0;
background: #eee;
border-radius: 10px;
border: none;
color: #888;
font-size: 1rem;
font-weight: 400;
` 

export const InfoInputWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
width: 95%;
gap: 2%;
`
export const InfoBtn = styled.button`
padding:7px 10px;
margin:5px 0;
border-radius: 10px;

&:hover{
    color: #200752;
}
`

export const RevenuButton = styled.button`
padding: 10px;
margin:10px 0;
border-radius: 10px;
width: 95%;
background: #97E198;
border: none;
color: #fff;
font-size: 1rem;
font-weight: 600;
transition: all 0.4s ease-in-out;

&:hover{
    background: #54C655;
    transform: scale(1.05);
}
`

export const RevenuColumn = styled.div`
padding: 0 10px;
`

export const Card = styled.div`
display: flex;
flex-direction: row;
gap: 10px;
margin: 15px 0 50px;

`

export const CardInfoWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
`
export const CardIcon = styled.img`
height: 120px;
width: 120px;

@media screen and (max-width: 768px){
    height: 120px;
    width: 120px;
}
` 
export const CardTitle = styled.p`
font-size: 1.6rem;
font-family: 'Raleway';
font-weight: 700;
color: #200752;

@media screen and (max-width: 768px){
    font-size: 1.6rem;
    
}
`
export const CardInfo = styled.p`
font-size: 1.5rem;
font-family: 'Raleway';
font-weight: 700;
color: #07E909;

@media screen and (max-width: 768px){
    font-size: 2rem;
}
` 


/**__________________________Historique__________________________________ */

export const HistoriqueContainer = styled.div`
margin-top: 20px;
` 
export const HistoriqueWrapper = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
` 
export const HistoriqueCard = styled.div`
width: 50%;
padding: 50px 0;
display: flex;
justify-content: center;
align-items: center;

font-size: 1rem;
font-family: 'Raleway';
font-weight: 600;
color: #666;
` 
export const Montant = styled.p`
width: 100%;
padding: 30px 0;
display: flex;
justify-content: center;
align-items: center;
background: #97E198;
border-top: solid 5px #fff;
margin-bottom: 30px;

font-size: 1.3rem;
font-family: 'Raleway';
font-weight: 700;
color: #fff;
`
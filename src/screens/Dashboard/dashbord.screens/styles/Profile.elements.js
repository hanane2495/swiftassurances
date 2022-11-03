import styled from 'styled-components'

//SignUp elements
export const ProfileForm = styled.form`
display: flex;
justify-content: space-between;
align-items: flex-start;
padding: 2%;

`
export const Title =  styled.h3`
font-size: 1.5rem;
font-family: 'Raleway';
font-weight: 600;
color: #200752;
`

export const InscriptionRow4 = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
align-items: center;
grid-row-gap: 0;
grid-column-gap: 20px;
width: 100%;
margin-bottom: 10px;


@media screen and (max-width: 870px){
    grid-template-columns: 1fr 1fr;
}

@media screen and (max-width: 570px){
    grid-template-columns: 1fr ;
}

`

export const InscriptionRow2 = styled.div`
display: flex;
flex-direction: column;
width:100%;
margin-bottom: 10px;
grid-column-gap: 20px;

@media screen and (max-width: 870px){
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    width:100%;
}

@media screen and (max-width: 570px){
    grid-template-columns: 1fr ;
}

`

export const InscriptionRow3 = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
grid-column-gap: 20px;
width:100%;

margin-bottom: 10px;

@media screen and (max-width: 570px){
    grid-template-columns: 1fr ;
}
`

export const InputWrapper = styled.div`
width: 100%;
display: flex;
justify-content: flex-end;
align-items: flex-end;
`


export const Input = styled.input`
width: 100%;
border: none;
padding: 10px;
margin: 10px 0;
border-radius: 10px;
`

export const BtnWrapper = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: flex-end;
align-items: flex-end;
`

export const RegisterBtn = styled.button`
padding: 10px 20px;
background: #200752;
border: none;
border-radius: 10px;
color: #fff;
`




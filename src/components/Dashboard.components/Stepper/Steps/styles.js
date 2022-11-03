import styled from "@emotion/styled";


/**_________Selection demarchec__________ */

export const Title = styled.h3`
font-size: 1.5rem;
font-family: 'Raleway';
font-weight: 600;
color: #200752;
`

export const Desc = styled.p`
margin: 0;
color: #555;
font-size: 1rem;
font-family: 'Raleway';
`

export const CardsContainer = styled.div`
width: 100%;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-gap: 20px;


`
export const Card = styled.div`
height: 150px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 20px;
background: #F4F5FF;
transition: all 0.5s ease-in-out;

box-shadow: 15px 8px 53px -13px rgba(0,0,0,0.3);
-webkit-box-shadow: 15px 8px 53px -13px rgba(0,0,0,0.3);
-moz-box-shadow: 15px 8px 53px -13px rgba(0,0,0,0.3);

&:hover{
    background: #200752;
    color: #fff;
    transform: scale(1.05);
}
`
export const CardIcon = styled.img`
height: 100px;

@media screen and (max-width: 768px){
    height: 50px;
}
`
export const CardTitle = styled.div`
font-family: 'Raleway';
font-weight: 600;
font-size: 1.2rem;

@media screen and (max-width: 768px){
    font-size: 0.6rem;
    text-align: center;
}
`

/**_________Info client__________________ */

export const FormContainer = styled.form`
width: 100%;
padding: 20px;
margin: 0;

@media screen and (max-width: 768px){
    padding: 20px 0;

}

`

export const FormRaw = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
width:100%;
`

export const InfoInput = styled.input`
background: #eee;
border: none;
height: 40px;
color:#555;
margin: 5px 0;
width: 100%;
border-radius: 10px;
padding: 10px;
`

export const ParticulierInput = styled.select`
background: #eee;
width:100%;
border: none;
height: 40px;
color:#555;
margin: 5px 0;
width: 100%;
border-radius: 10px;
padding: 10px;
`

export const OptionInput = styled.option`
`

export const ButtonWrapper = styled.div`
width: 100%;
display: flex;
justify-content: flex-end;
align-items: flex-end;
margin-top: 10px;
`


export const RegisterButton = styled.button`
padding: 10px 20px;
background: #200752;
color: #fff;
border:none;
border-radius: 10px;
`



/**_________Dossier______________________ */

export const DocsFormContainer = styled.form`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
width: 100%;
padding: 0;

@media screen and (max-width: 768px){
    flex-direction: column;
    gap: 20px;
}
`

export const DocWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-start;


`


export const DocTitle = styled.h3`
font-size: 1rem;
font-family: 'Raleway';
font-weight: 500;
color: #07E909;
`


export const DocsInputWrapper = styled.div`
height:200px;
border: solid 2px #200752;
border-radius: 10px;
padding: 20px;

@media screen and (max-width: 768px){
    height:300px;
    width:250px;
}
`
export const DocsDesc = styled.li`
color: #777;
`
export const DocLable = styled.label`
cursor: pointer;
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: flex-start;
`

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
`

export const DocsInput = styled.input`
display: none;
`

import React from 'react'
import {Desc, Title, FormContainer, FormRaw, InfoInput, ParticulierInput, OptionInput, ButtonWrapper, RegisterButton} from './styles'

const InfoClient = () => {
  return (
    <>
       <Title>Informations Personnelles du Client</Title>
       <Desc>Pour que votre demande puisse être traitée, veuillez remplir le formulaire ci-dessous.</Desc>
       <p style={{color:'#07E909', margin:'0px'}}>Important : Tous les champs sont obligatoires !</p>
       <FormContainer>
        <FormRaw>
          <InfoInput style={{marginRight:'10px'}} placeholder='Nom'></InfoInput>
          <InfoInput placeholder='Prenom'></InfoInput>
        </FormRaw>
        <InfoInput placeholder='Adresse'></InfoInput>
        <InfoInput placeholder='Telephone'></InfoInput>
        <InfoInput placeholder='Email'></InfoInput>
        <br/>
        <InfoInput placeholder='Plaque d immatriculation'></InfoInput>
        <ParticulierInput>
          <OptionInput>Particuler</OptionInput>
          <OptionInput>Professionnel</OptionInput>
        </ParticulierInput>
        <ButtonWrapper>
          <RegisterButton type='submit'>Enregistrer</RegisterButton>
        </ButtonWrapper>
       </FormContainer>
    </>
  )
}

export default InfoClient
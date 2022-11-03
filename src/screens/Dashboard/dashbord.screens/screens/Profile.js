import React from 'react'
import {ProfileForm, Title, Input, InputWrapper, InscriptionRow2, InscriptionRow3, InscriptionRow4, BtnWrapper, RegisterBtn} from '../styles/Profile.elements'

const Profile = () => {
  return (
    <>
    <ProfileForm >
        <Title>Mohamed Ziani</Title>
        <InscriptionRow4>
          <InputWrapper>
            <Input placeholder='Nom' type='text'/>
          </InputWrapper>
          <InputWrapper>
            <Input placeholder='Prenom' type='text'/>
          </InputWrapper>
          <InputWrapper>
            <Input placeholder='Ville' type='text'/>
          </InputWrapper>
          <InputWrapper>
            <Input placeholder='Code Postale' type='text'/>
          </InputWrapper>
        </InscriptionRow4>
        <InscriptionRow2>
          <InputWrapper>
            <Input placeholder='Adresse' type='text'/>
          </InputWrapper>
          <InputWrapper>
            <Input placeholder='Complements d adresse'  type='text'/>
          </InputWrapper>
        </InscriptionRow2>  
        <InscriptionRow3>
        <InputWrapper>
            <Input placeholder='Raison Sociale' type='text'/>
          </InputWrapper>
          <InputWrapper>
            <Input placeholder='Siret...' type='text'/>
          </InputWrapper>
          <InputWrapper>
            <Input placeholder='Nombre d ager' type='text'/>
          </InputWrapper>
        </InscriptionRow3>
        <InscriptionRow2>
          <InputWrapper>
            <Input placeholder='Email...'  type='text'/>
          </InputWrapper>
          <InputWrapper>
            <Input placeholder='Telephone...'  type='text'/>
          </InputWrapper>
        </InscriptionRow2>
        <InscriptionRow4>
          <InputWrapper>
            <Input placeholder='Mot de Passe'  type='password'/>
          </InputWrapper>
          <InputWrapper>
            <Input placeholder='Confirmer Mot de passe'  type='password'/>
          </InputWrapper>
        </InscriptionRow4>
        <BtnWrapper>
          <RegisterBtn> Enregistrer </RegisterBtn>
        </BtnWrapper>
    </ProfileForm>
    </>
  )
}

export default Profile
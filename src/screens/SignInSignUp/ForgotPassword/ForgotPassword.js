import React from 'react'
import {Container} from '../../../GlobalStyles'
import { InputWrapper, Input} from "../SignInSignUp.elements"
import {Card, CardLeftColumn, CardRightColumn, ForgotPasswordForm, ForgotPasswordImage, RegisterButton, CardTitle} from "./ForgotPassword.elements"

const ForgotPassword = () => {
  return (
    <>
      <Container>
        <Card>
            <CardLeftColumn>
                <ForgotPasswordImage src={require('../../../assets/undraw/forgot.svg')}/>
            </CardLeftColumn>
            <CardRightColumn>
                < ForgotPasswordForm>
                < CardTitle>Changer Mot de passe</ CardTitle>
                <InputWrapper>
                    <Input placeholder='Email' type='email'/>
                </InputWrapper>
                <InputWrapper>
                    <Input placeholder='Nouveau Mot de Passe' type='password'/>
                </InputWrapper>
                <InputWrapper>
                    <Input placeholder='Confirmer Mot De Passe' type='password'/>
                </InputWrapper>
                <RegisterButton>Enregistrer</RegisterButton>
                </ ForgotPasswordForm>
            </CardRightColumn>
        </Card>
      </Container>
    </>
  )
}

export default ForgotPassword
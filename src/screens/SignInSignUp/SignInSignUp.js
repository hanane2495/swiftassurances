import React, { useEffect, useState } from 'react'
import { Title, Input, ConnectButton, InputWrapper, IconContainer, InscriptionRow4, InscriptionRow2, Description, SignUpBtn, SignUpSignInTitle} from './SignInSignUp.elements'
import {FaUserAlt} from 'react-icons/fa'
import {BsLockFill} from 'react-icons/bs'
import "./SignInSignUp.css"
import { Link } from 'react-router-dom'

//redux
import {useSelector, useDispatch} from 'react-redux'
import {logIn} from '../../State/Actions/Actions'

const SignIn = () => {

const isLogged = useSelector(state => state.isLogged)
const dispatch = useDispatch();

const [signUpClicked, setSignUpClicked] = useState(false)

const handleSubmitLogIn = e =>{
  e.preventDefault()
}

const handleSubmitSignUp = e =>{
  e.preventDefault()
}

useEffect(() =>{
  console.log(isLogged)
}, [isLogged])

useEffect(()=>{
  const sign_up_btn = document.getElementById("sign-up-btn");
  const sign_in_btn = document.getElementById("sign-in-btn");

  
  sign_up_btn.addEventListener("click", () => {
    setSignUpClicked(true)
  });

  sign_in_btn.addEventListener("click", () => {
    setSignUpClicked(false)
  });


}, [])

  return (
    <>
    <div className={signUpClicked ? 'SignInSignUpContainer sign-up-mode' : 'SignInSignUpContainer' } >
      <div className='forms-SignInSignUpContainer'>
        <div className='signin-signup'>

          <form className='sign-in-form' onSubmit={handleSubmitLogIn}>
            <Title>Se connecter</Title>
            <InputWrapper>
                <IconContainer>
                    <FaUserAlt style={{width:'25px', height:'25px'}}/>
                </IconContainer>
                <Input placeholder='Email' type='email'/>
            </InputWrapper>
            <InputWrapper>
                <IconContainer>
                    <BsLockFill style={{width:'25px', height:'25px'}}/>
                </IconContainer>
                <Input placeholder='Mot de passe' type='password'/>
            </InputWrapper>
                <Link style={{color:'#5320BA', textAlign:'center', margin:"10px auto"}} to="forgot-password"> Vous avez oublié votre mot de passe ? </Link>
            <ConnectButton onClick={() => dispatch(logIn())}><Link to='tableau-de-bord'>Se connecter</Link></ConnectButton>
          </form>


          <form className='sign-up-form' onSubmit={handleSubmitSignUp}>
            <Title>S'inscrir</Title>
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
            <InscriptionRow2>
              <InputWrapper>
                <Input placeholder='Email...'  type='text'/>
              </InputWrapper>
              <InputWrapper>
                <Input placeholder='Telephone...'  type='text'/>
              </InputWrapper>
            </InscriptionRow2>
            <InscriptionRow2>
              <InputWrapper>
                <Input placeholder='Mot de Passe'  type='password'/>
              </InputWrapper>
              <InputWrapper>
                <Input placeholder='Confirmer Mot de passe'  type='password'/>
              </InputWrapper>
            </InscriptionRow2>
            <ConnectButton onClick={() =>{dispatch(logIn())}}><Link to="tableau-de-bord">S'inscrir</Link></ConnectButton>
          </form>

        </div>
      </div>

      <div className='panels-container'>
        <div className='panel left-panel'>
          <div className='content'>
            <SignUpSignInTitle>Pas encore Membre ?</SignUpSignInTitle>
            <Description>
              Vous souhaitez devenir partenaire Swiftassurances ? inscrivez-vous et Proposez un service d'assurances de confiance à vos clients
            </Description>
            <SignUpBtn id='sign-up-btn'>S'inscrire</SignUpBtn>
          </div>
          <img className='image' src={require('../../assets/undraw/SignUp.svg') }/>
        </div>
        <div className='panel right-panel'>
          <div className='content'>
            <SignUpSignInTitle>Deja Membre ?</SignUpSignInTitle>
            <Description>
              L'equipe SWIFTASSURANCES est ravis de vous compter parmi ses clients ! Connectez-vous et profiter de nos services d'assurances de qualite.
            </Description>
            <SignUpBtn id='sign-in-btn'>Se connecter</SignUpBtn>
          </div>
          <img className='image' src={require('../../assets/undraw/SignIn.svg')}/>
        </div>
      </div>
    </div>
    </>
  )
}

export default SignIn



/**
 * <InscriptionRow3>
              <InputWrapper>
                <Input placeholder='Raison Sociale' type='text'/>
              </InputWrapper>
              <InputWrapper>
                <Input placeholder='Siret...'  type='text'/>
              </InputWrapper>
              <InputWrapper>
                <Input placeholder='Nombre d ager'  type='text'/>
              </InputWrapper>
            </InscriptionRow3>    
 */
import React, { useState } from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import Spinner from 'react-bootstrap/Spinner'
import {FooterWrapper, FooterRaw, FooterColumn, Logo, Description, SectionsList, ListItem, CallToAction, Title, ContactForm, Message, Name, ContactButton} from './Footer.elements'
import {Button, CallToActionButton, Container} from '../../GlobalStyles'

const Footer = () => {

    const form = useRef();
    const [sent, setSent] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();
        setSent(true)
    
        emailjs.sendForm('service_lt6hmgm', 'template_0cb0fb5', form.current, '8e7g46_1JV1enDmWq')
          .then((result) => {
              setSent(false)
              console.log(result.text);
              alert('votre message a bien été reçu, Merci')
          }, (error) => {
              console.log(error.text);
              alert(error.text)
              setSent(false)
          });

          e.target.reset();
      };

  return (
    <>
    <FooterWrapper id='#conatct'>
        <Container>
            <FooterRaw>
                <FooterColumn>
                    <Logo>
                       <img style={{height:'100px', width:'280px'}} src={require('../../assets/logo/logo vertical blanc footer.png')} alt='logo swiftassurances'/>
                    </Logo>
                    <Description>
                        SWIFTASSURANCES a été conçu pour compléter les services proposés à vos clients tout en préservant la liberté de continuer votre métier sans perdre de temps
                    </Description>
                    <Description>Depuis un ordinateur, une tablette ou un smartphone, le client se connecte directement sur swiftassurances pour compléter son dossier.</Description>
                </FooterColumn>
                <FooterColumn>
                    <Title>Sections</Title>
                    <SectionsList>
                        <ListItem>Services</ListItem>
                        <ListItem>A propos de nous</ListItem>
                        <ListItem>Offres</ListItem>
                        <ListItem>Partenaires</ListItem>
                    </SectionsList>
                    <CallToAction>
                        <Title>Nous Joindre !</Title>
                        <Description>Vous souhaiter devenir partenaire SWIFTASSURANCES?</Description>
                        <CallToActionButton>Je m'inscris</CallToActionButton>
                    </CallToAction>
                </FooterColumn>
                <FooterColumn>
                    <Title>Contact</Title>
                    <ContactForm ref={form} onSubmit={sendEmail}>
                        <Name type="email" name="user_email" placeholder='Email'/>
                        <Name type="text" name="user_name" placeholder='Nom & prenom'/>
                        <Message name="message" placeholder='Votre Message'/>
                        <ContactButton type="submit">{!sent ? 'Envoyer' :
                              <Spinner animation="grow" role="status" size="sm"/>}
                        </ContactButton>
                    </ContactForm>
                </FooterColumn>
            </FooterRaw>
        </Container>
    </FooterWrapper>
    </>
  )
}

export default Footer
import React from 'react'
import { Container } from '../../../GlobalStyles'
import { Services, Title, ServicesWrapper, ServiceCard, ServiceIcon, ServiceTitle, ServiceDescription, IconWrapper, TextWrapper } from './Services.section.elements'

const ServicesSection = () => {
  return (
    <>
       <Services>
        <Container>
            <Title src={require('../../../assets/logo/services title.png')} alt='logo swiftassurances'/>
            <ServicesWrapper>
              <ServiceCard>
                <IconWrapper>
                    <ServiceIcon src={require('../../../assets/icons/handshake (1).png')}/>
                </IconWrapper>
                <TextWrapper>
                    <ServiceTitle>Proposez un service d'assurances de confiance à vos clients</ServiceTitle>
                    <ServiceDescription>Utilisez une plateforme gratuite et sans engagement sur laquelle vous pourrez faire la demande</ServiceDescription>
                </TextWrapper>
              </ServiceCard>
              <ServiceCard>
                <IconWrapper>
                   <ServiceIcon src={require('../../../assets/icons/clock.png')}/>
                </IconWrapper>
                <TextWrapper>
                   <ServiceTitle>Obtenez un devis en 15 minutes !</ServiceTitle>
                   <ServiceDescription>À la réception du dossier, nous établirons un devis en 15 minutes seulement</ServiceDescription>
                </TextWrapper>
              </ServiceCard>
              <ServiceCard>
                <IconWrapper>
                    <ServiceIcon src={require('../../../assets/icons/icone play.png')}/>
                </IconWrapper>
                <TextWrapper>
                    <ServiceTitle>Obtenez l'attestation d'assurance immédiatement !</ServiceTitle>
                    <ServiceDescription>Nous adressons au client son contrat d’assurance et son attestation d’assurance immédiatement après la signature électronique du contrat </ServiceDescription>
                </TextWrapper>
              </ServiceCard>
            </ServicesWrapper>
        </Container>
       </Services>
    </>
  )
}

export default ServicesSection
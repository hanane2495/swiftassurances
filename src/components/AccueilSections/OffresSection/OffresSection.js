import React from 'react'
import { Container } from '../../../GlobalStyles'
import {Offres, OffresWrapper, OffreCard, OffreIcon, TextWrapper, OffreTitle} from './offresSection.elements'
import { IconWrapper, Title } from '../ServicesSection/Services.section.elements'

const OffresSection = () => {
  return (
    <>
     <Offres>
        <Container>
           <Title src={require('../../../assets/logo/offres title.png')} alt='logo swiftassurances'/>
           <OffresWrapper>
            <OffreCard>
                <IconWrapper>
                    <OffreIcon src={require('../../../assets/icons/auto.png')}/>
                </IconWrapper>
                <TextWrapper>
                    <OffreTitle>AUTO</OffreTitle>
                </TextWrapper>
            </OffreCard>
            <OffreCard>
                <IconWrapper>
                    <OffreIcon src={require('../../../assets/icons/auto-temporaire.png')}/>
                </IconWrapper>
                <TextWrapper>
                    <OffreTitle>AUTO-TEMPORAIRE</OffreTitle>
                </TextWrapper>
            </OffreCard>
            <OffreCard>
                <IconWrapper>
                    <OffreIcon src={require('../../../assets/icons/moto.png')}/>
                </IconWrapper>
                <TextWrapper>
                    <OffreTitle>MOTO</OffreTitle>
                </TextWrapper>
            </OffreCard>
            <OffreCard>
                <IconWrapper>
                    <OffreIcon src={require('../../../assets/icons/cyclo.png')}/>
                </IconWrapper>
                <TextWrapper>
                    <OffreTitle>CYCLO</OffreTitle>
                </TextWrapper>
            </OffreCard>
           </OffresWrapper>
        </Container>
     </Offres>
    </>
  )
}

export default OffresSection
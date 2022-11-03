import React from 'react'
import { Container } from '../../../GlobalStyles'
import { InfoSec, InfoColumn, InfoRow, TextWrapper,Heading, Subtitle, TopTitle, ImageWrapper, Img } from './InfoSection.elements'


const InfoSection = ({lightBg, imgStart, lightText, lightTextDesc, description, headline, start, img, alt}) => {
  return (
    <>
       <InfoSec lightBg={lightBg}>
        <Container>
            <InfoRow imgStart = {imgStart}>
                <InfoColumn>
                    <TextWrapper>
                        <TopTitle>SWIFTASSURANCES</TopTitle>
                        <Heading lightText = {lightText}>Proposez un service d'assurance a vos clients!</Heading>
                        <Subtitle lightTextDesc = {lightTextDesc}>GRATUIT. RÉMUNÉRATEUR ET SANS ENGAGEMENT</Subtitle>
                    </TextWrapper>
                </InfoColumn>
                <InfoColumn>
                    <ImageWrapper>
                        <Img src={require('../../../assets/undraw/infosection.png')} alt={alt}/>
                    </ImageWrapper>
                </InfoColumn>
            </InfoRow>
        </Container>
       </InfoSec>
    </>
  )
}

export default InfoSection
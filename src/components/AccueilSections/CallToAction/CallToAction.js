import React from 'react'
import { Link } from 'react-router-dom'
import { CallToActionButton, Container } from '../../../GlobalStyles'
import { InfoSec, InfoColumn, InfoRow, TextWrapper,Heading, Subtitle, TopTitle, ImageWrapper, Img, Desc } from '../InfoSection/InfoSection.elements'


const CallToAction = ({lightBg, imgStart, lightText, lightTextDesc, description, headline, start, img, alt}) => {
  return (
    <>
    <InfoSec lightBg={lightBg}>
        <Container>
            <InfoRow imgStart = {imgStart}>
                <InfoColumn>
                    <ImageWrapper>
                        <Img src={require('../../../assets/undraw/description4.png')} alt={alt}/>
                    </ImageWrapper>
                </InfoColumn>
                <InfoColumn>
                    <TextWrapper>
                        <TopTitle>SWIFTASSURANCES</TopTitle>
                        <Heading lightText = {lightText}>Notre service vous intéresse ? </Heading>
                        <Subtitle lightTextDesc = {lightTextDesc}>VOUS SOUHAITEZ DEVENIR PARTENAIRE SWIFTASSURANCES ?</Subtitle>
                        <Desc lightTextDesc = {!lightTextDesc}>C'est très simple ! <br/> Faites votre demande</Desc>
                        <CallToActionButton><Link style={{textDecoration : 'none', color:'#fff'}} to='signIn'>Cliquer ici !</Link></CallToActionButton>
                    </TextWrapper>
                </InfoColumn>
                
            </InfoRow>
        </Container>
    </InfoSec>
    </>
  )
}

export default CallToAction
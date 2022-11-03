import React from 'react'
import { Container } from '../../../GlobalStyles'
import { InfoSec, InfoColumn, InfoRow, TextWrapper,Heading, Subtitle, ImageWrapper,TextWrapper1, Img, Description, Item } from '../InfoSection/InfoSection.elements'
import {FaCheck} from 'react-icons/fa'

const DescriptionSection1 = ({lightBg, imgStart, lightText, lightTextDesc, description, headline, start, img, alt}) => {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
            <InfoRow imgStart = {imgStart}>
                <InfoColumn>
                    <ImageWrapper>
                        <Img src={require('../../../assets/undraw/description1.png')} alt={alt}/>
                    </ImageWrapper>
                </InfoColumn>
                <InfoColumn>
                    <TextWrapper1>
                        <Heading lightText = {lightText}>Nous nous occupons de tout !</Heading>
                        <Description >SWIFTASSURANCES a été conçu pour compléter les services proposés à vos clients tout en préservant la liberté de continuer votre métier sans perdre de temps</Description>
                        <Item><FaCheck style={{color:'#07E909', padding:'10px', width:'50px', height:'50px'}}/>C'est très simple, créez un compte et envoyez-nous la demande de votre client.</Item>
                        <Item><FaCheck style={{color:'#07E909', padding:'10px', width:'50px', height:'50px'}}/>Nous nous occupons du reste.</Item>
                    </TextWrapper1>
                </InfoColumn>
            </InfoRow>
        </Container>
       </InfoSec>
    </>
  )
}

export default DescriptionSection1
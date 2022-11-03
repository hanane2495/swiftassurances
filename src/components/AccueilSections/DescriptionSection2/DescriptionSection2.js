import React from 'react'
import { Container } from '../../../GlobalStyles'
import { InfoSec, InfoColumn, InfoRow, TextWrapper,Heading, Subtitle, ImageWrapper, Img, Description } from '../InfoSection/InfoSection.elements'


const DescriptionSection2 = ({lightBg, imgStart, lightText, lightTextDesc, description, headline, start, img, alt}) => {
  return (
    <>
      <InfoSec lightBg={!lightBg}>
        <Container>
            <InfoRow imgStart = {imgStart}>
                <InfoColumn>
                    <TextWrapper>
                        <Heading lightText = {lightText}>Faites bénéficiez vos clients d'un service innovant et 100% dématérialisé</Heading>
                        <Description>Depuis un ordinateur, une tablette ou un smartphone, le client se connecte directement sur swiftassurances pour compléter son dossier.</Description>
                    </TextWrapper>
                </InfoColumn>
                <InfoColumn>
                    <ImageWrapper>
                        <Img src={require('../../../assets/undraw/description2.png')} alt={alt}/>
                    </ImageWrapper>
                </InfoColumn>
            </InfoRow>
        </Container>
       </InfoSec>
    </>
  )
}

export default DescriptionSection2
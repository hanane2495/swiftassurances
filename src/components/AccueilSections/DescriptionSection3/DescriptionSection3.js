import React from 'react'
import { Container } from '../../../GlobalStyles'
import { InfoSec, InfoColumn, InfoRow, TextWrapper,Heading, Item, ImageWrapper, Img } from '../InfoSection/InfoSection.elements'
import {FaCheck} from 'react-icons/fa'

const DescriptionSection3 = ({lightBg, imgStart, lightText, lightTextDesc, description, headline, start, img, alt}) => {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
            <InfoRow imgStart = {imgStart}>
                <InfoColumn>
                    <TextWrapper>
                        <Heading lightText = {lightText}>Vos bonus</Heading>
                        <Item><FaCheck style={{color:'#07E909', padding:'10px', width:'50px', height:'50px'}}/>Nous vous offrons une gratification pour chaque leads signé</Item>
                        <Item><FaCheck style={{color:'#07E909', padding:'10px', width:'50px', height:'50px'}}/>Une équipe disponible 6j/7j de 10h à 19h pour répondre à vos besoins</Item>
                        <Item><FaCheck style={{color:'#07E909', padding:'10px', width:'50px', height:'50px'}}/>Des supports de communication offerts</Item>
                    </TextWrapper>
                </InfoColumn>
                <InfoColumn>
                    <ImageWrapper>
                        <Img src={require('../../../assets/undraw/description3.png')} alt={alt}/>
                    </ImageWrapper>
                </InfoColumn>
            </InfoRow>
        </Container>
       </InfoSec>
    </>
  )
}

export default DescriptionSection3
import React from 'react'
import { Container } from '../../../GlobalStyles'
import {Partners, Title, Subtitle, PartnersRaw, PartnerImage, PartnerWrapper} from './PartnersSection.elements'

const PartnerSection = () => {
  return (
    <>
    <Partners>
        <Container>
            <Title>Nos Partenaires</Title>
            <Subtitle>Des partenaires solides pour accompagner nos clients</Subtitle>
            <PartnersRaw>
                <PartnerWrapper>
                    <PartnerImage src = {require('../../../assets/partners/allianz.jpeg')}/>
                </PartnerWrapper>
                <PartnerWrapper>
                    <PartnerImage src = {require('../../../assets/partners/apivia.jpeg')}/>
                </PartnerWrapper>
                <PartnerWrapper>
                    <PartnerImage src = {require('../../../assets/partners/april.jpeg')}/>

                </PartnerWrapper>
                <PartnerWrapper>
                     <PartnerImage src = {require('../../../assets/partners/aviva.jpeg')}/>
                </PartnerWrapper>
                <PartnerWrapper>
                <PartnerImage src = {require('../../../assets/partners/axa.jpeg')}/>

                </PartnerWrapper>
                <PartnerWrapper>
                <PartnerImage src = {require('../../../assets/partners/balcia.jpeg')}/>

                </PartnerWrapper>
                <PartnerWrapper>
                <PartnerImage src = {require('../../../assets/partners/generali.jpeg')}/>

                </PartnerWrapper>
                <PartnerWrapper>
                <PartnerImage src = {require('../../../assets/partners/groupama.jpeg')}/>

                </PartnerWrapper>
                <PartnerWrapper>
                <PartnerImage src = {require('../../../assets/partners/hdi.jpeg')}/>

                </PartnerWrapper>
                <PartnerWrapper>
                <PartnerImage src = {require('../../../assets/partners/laparisienne.jpeg')}/>

                </PartnerWrapper>
                <PartnerWrapper>
                <PartnerImage src = {require('../../../assets/partners/netvox.jpeg')}/>

                </PartnerWrapper>
                <PartnerWrapper>
                <PartnerImage src = {require('../../../assets/partners/zephir.jpeg')}/>

                </PartnerWrapper>

            </PartnersRaw>
            <PartnersRaw>
            </PartnersRaw>
        </Container>
    </Partners>
    </>
  )
}

export default PartnerSection
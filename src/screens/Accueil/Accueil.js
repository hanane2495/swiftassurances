import React from 'react'
import CallToAction from '../../components/AccueilSections/CallToAction/CallToAction'
import DescriptionSection1 from '../../components/AccueilSections/DescriptionSection1/DescriptionSection1'
import DescriptionSection2 from '../../components/AccueilSections/DescriptionSection2/DescriptionSection2'
import DescriptionSection3 from '../../components/AccueilSections/DescriptionSection3/DescriptionSection3'
import InfoSection from '../../components/AccueilSections/InfoSection/InfoSection'
import OffresSection from '../../components/AccueilSections/OffresSection/OffresSection'
import PartnerSection from '../../components/AccueilSections/PartnersSection/PartnerSection'
import ServicesSection from '../../components/AccueilSections/ServicesSection/ServicesSection'
import Footer  from '../../components/Footer/Footer'
import { homeObjOne } from './Data'

const Accueil = () => {
  return (
    <>
      <InfoSection {...homeObjOne}/>
      <ServicesSection {...homeObjOne}/>
      <DescriptionSection1 {...homeObjOne}/>
      <DescriptionSection2 {...homeObjOne}/>
      <DescriptionSection3 {...homeObjOne}/>
      <OffresSection/>
      <CallToAction {...homeObjOne}/>
      <PartnerSection/>
      <Footer/>
    </>
  )
}

export default Accueil
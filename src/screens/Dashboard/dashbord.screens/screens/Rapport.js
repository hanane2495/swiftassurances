import React from 'react'
import {RapportContainer, ReportCard, CardCol, Title, CardIcon, ButtonsWrapper, CardBtn, Input, OptionInput} from '../styles/Rapport.elements'

const Rapport = () => {
  return (
    <>
    <RapportContainer>
      <ReportCard>
        <CardCol style={{width:'30%'}}>
          <CardIcon src={require('../../../../assets/icons/rapport1.png')}/>
        </CardCol>
        <CardCol style={{width:'70%'}}>
          <Title>Demandes</Title>
          <Input>
            <OptionInput>Tous les états</OptionInput>
            <OptionInput>Assurance Auto</OptionInput>
            <OptionInput>Assurance Moto</OptionInput>
            <OptionInput>Assurance Tempo</OptionInput>
            <br/>
            <OptionInput>---------------</OptionInput>
            <br/>
            <OptionInput>En Verification</OptionInput>
            <OptionInput>Dossiers traités</OptionInput>
            <OptionInput>À completer</OptionInput>
            <OptionInput>Refusés</OptionInput>

          </Input>
          <Input>
            <OptionInput>Toutes les Années</OptionInput>
            <OptionInput>2021</OptionInput>
            <OptionInput>2022</OptionInput>
          </Input>
          <Input>
            <OptionInput>Tous les Mois</OptionInput>
            <OptionInput>Janvier</OptionInput>
            <OptionInput>Fevrier</OptionInput>
            <OptionInput>Mars</OptionInput>
            <OptionInput>Avril</OptionInput>
            <OptionInput>Mai</OptionInput>
            <OptionInput>Juin</OptionInput>
            <OptionInput>Juillet</OptionInput>
            <OptionInput>Aout</OptionInput>
            <OptionInput>Septembre</OptionInput>
            <OptionInput>Octobre</OptionInput>
            <OptionInput>Novembre</OptionInput>
            <OptionInput>Decembre</OptionInput>
          </Input>
          <ButtonsWrapper>
            <CardBtn style={{background:'#07E909'}}>Consulter</CardBtn>
            <CardBtn style={{background:'#200752'}} >Telecharger</CardBtn>
          </ButtonsWrapper>
        </CardCol>
      </ReportCard>
      <ReportCard>
        <CardCol style={{width:'30%'}}>
          <CardIcon src={require('../../../../assets/icons/rapport2.png')}/>
        </CardCol>
        <CardCol style={{width:'70%'}}>
          <Title>Commissions perçues</Title>
          <Input>
            <OptionInput>Toutes les Années</OptionInput>
            <OptionInput>2021</OptionInput>
            <OptionInput>2022</OptionInput>
          </Input>
          <Input>
            <OptionInput>Tous les Mois</OptionInput>
            <OptionInput>Janvier</OptionInput>
            <OptionInput>Fevrier</OptionInput>
            <OptionInput>Mars</OptionInput>
            <OptionInput>Avril</OptionInput>
            <OptionInput>Mai</OptionInput>
            <OptionInput>Juin</OptionInput>
            <OptionInput>Juillet</OptionInput>
            <OptionInput>Aout</OptionInput>
            <OptionInput>Septembre</OptionInput>
            <OptionInput>Octobre</OptionInput>
            <OptionInput>Novembre</OptionInput>
            <OptionInput>Decembre</OptionInput>
          </Input>
          <ButtonsWrapper>
            <CardBtn style={{background:'#07E909'}}>Consulter</CardBtn>
            <CardBtn style={{background:'#200752'}} >Telecharger</CardBtn>
          </ButtonsWrapper>
        </CardCol>
      </ReportCard>
    </RapportContainer>
    </>
  )
}

export default Rapport
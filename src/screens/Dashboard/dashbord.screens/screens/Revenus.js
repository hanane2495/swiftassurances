import React, { useState } from 'react'
import Table from '../../../../components/Dashboard.components/Table/TableRevenu'
import {RevenuWrapper, RevenuContainer, BigTitle, InfoColumn, Title, Desc, FormContainer, 
  InfoInput, InfoInputWrapper, InfoBtn, RevenuButton, RevenuColumn, Card, CardInfoWrapper, CardIcon, 
  CardInfo, HistoriqueContainer, HistoriqueWrapper, HistoriqueCard, Montant, CardTitle } from '../styles/Revenu.elements'


//table data
import {HistoriqueRevenu} from '../../../../components/Dashboard.components/Table/data'


const Revenus = () => {

  return (
    <>
      <RevenuWrapper>
        <BigTitle>Vos Revenus</BigTitle>
        <RevenuContainer>
          <InfoColumn>
            <Title>Informations bancaire</Title>
            <Desc>Veuillez entrer vos Coordonnees bancaire ci-dessous</Desc>
            <FormContainer>
              <InfoInput style={{width:'95%'}} placeholder='Nom'/>
              <InfoInputWrapper>
                <InfoInput style={{width:'50%'}} placeholder='IBAN'/>
                <InfoInput style={{width:'50%'}} placeholder='BIC'/>
              </InfoInputWrapper>
              <InfoInputWrapper>
                <InfoBtn style={{background:'none', border:'solid 1px #888'}}>Modifier</InfoBtn>
                <InfoBtn style={{background:'none', color:'#07E909', border:'solid 1px #07E909' }}>Enregistrer</InfoBtn>
              </InfoInputWrapper>
            </FormContainer>
            <RevenuButton>Reccuperer mes Revenus</RevenuButton>
          </InfoColumn>

          <RevenuColumn>
            <Card>
              <CardIcon src={require('../../../../assets/icons/money-bag.png') }/>
              <CardInfoWrapper>
                <CardTitle>Revenus Disponoible</CardTitle>
                <CardInfo>66,67£ (Ht)</CardInfo>
              </CardInfoWrapper>
            </Card>
            <Title>Resumé</Title>
            <Desc>De 15 Assurances (66,67£) Ht</Desc>
            <Desc>De 0 Commissions (0,00£) Ht</Desc>
          </RevenuColumn>
        </RevenuContainer>
        <HistoriqueContainer>
          <Title>Historique</Title>
          <Desc>Vous pouvez consulter toutes vos transactions ci-dessous</Desc>
          <HistoriqueWrapper>
            <HistoriqueCard style={{background:'#BFF4F8',borderRight:'solid 5px #fff'}}>Nombre d assurance effectuées : 5 (37,56) HT</HistoriqueCard>
            <HistoriqueCard style={{background:'#E8E9F7'}}>Nombre de commissions effectuées : 0 (0,00) HT</HistoriqueCard>
          </HistoriqueWrapper>
          <Montant>Montant Recupéré : 37,56£ HT</Montant>
          <Table data={HistoriqueRevenu}/>
        </HistoriqueContainer>
      </RevenuWrapper>
    </>
  )
}

export default Revenus
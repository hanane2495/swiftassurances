import React, { useState } from 'react'
import { Title, Desc, DocsFormContainer, DocsInputWrapper, DocsInput, DocTitle, DocWrapper, DocsDesc, DocLable, Wrapper } from './styles'
import {FaAddressCard} from 'react-icons/fa'


const Dossier = () => {

  const [message, setMessage] = useState({
    permis:'',
    carteGrise:''
  })

  function handleFileUpload (e, input){
    if(input === 'permis'){
      setMessage({...message, permis : `${e.target.files.length} Fichiers ont ete ajoutee.`})

    }else{
      setMessage({...message, carteGrise : `${e.target.files.length} Fichiers ont ete ajoutee.`})
    }
  }
  
  return (
    
    <>
      <Title>Documents necessaires</Title>
      <Desc>Veuillez Fournir les documents Necessaire pour completer votre demande !</Desc>
      <DocsFormContainer>
        <DocWrapper>
          <DocTitle>Permis</DocTitle>
          <DocsInputWrapper>
            <DocsDesc>Selectioner plusieur fichier</DocsDesc>
            <DocsDesc>Le Permis doit être scanné en recto-verso</DocsDesc>
            <DocsDesc>.Pdf seulement</DocsDesc>
            <br/>
            <DocLable>
              <FaAddressCard style={{width:'50px', height:'50px', color:'#fff', background:'#07E909', padding:'10px', borderRadius:'50px'}}/>
              <Wrapper>
                 <p style={{color:'#888', marginLeft:'10px'}}>selectionner vos fichiers .pdf</p>
                 <p style={{color:'#888', marginLeft:'10px'}}>Les fichier doivent être lisible</p>
                 <p style={{color:'green', marginLeft:'10px'}}>{message.permis}</p>
              </Wrapper>
              <DocsInput onChange={(e) =>{handleFileUpload(e, 'permis')}} id="inputTag" type='file' multiple></DocsInput>
            </DocLable>
          </DocsInputWrapper>
        </DocWrapper>
        <DocWrapper>
          <DocTitle>Carte Grise</DocTitle>
          <DocsInputWrapper>
            <DocsDesc>Selectioner plusieur fichier</DocsDesc>
            <DocsDesc>La C.G doit être scannée en recto-verso</DocsDesc>
            <DocsDesc>.Pdf seulement</DocsDesc>
            <br/>
            <DocLable>
              <FaAddressCard style={{width:'50px', height:'50px', color:'#fff', background:'#07E909', padding:'10px', borderRadius:'50px'}}/>
              <Wrapper>
                 <p style={{color:'#888', marginLeft:'10px'}}>selectionner vos fichiers .pdf</p>
                 <p style={{color:'#888', marginLeft:'10px'}}>Les fichier doivent être lisible</p>
                 <p style={{color:'green', marginLeft:'10px'}}>{message.carteGrise}</p>
              </Wrapper>
              <DocsInput onChange={(e) =>{handleFileUpload(e, 'carte grise')}} id="inputTag" type='file' multiple></DocsInput>
            </DocLable>
          </DocsInputWrapper>
        </DocWrapper>
      </DocsFormContainer>
    </>
  )
}

export default Dossier
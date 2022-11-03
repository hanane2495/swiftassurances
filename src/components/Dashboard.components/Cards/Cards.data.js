import React from "react";
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri'

const IconStyle = {
    width:"40px",
    height:"40px", 
    marginRight:'15px',
    color: '#fff'
}

export const CardsData = [
    {
        heading : "Nouvelle Demande",
        number:null,
        path:'nouvelle-demande',
        image:'nouvelle demande.svg',
        desc : 'Effectuer une demande d assurance en 3 etapes seulement !',
        btnText:'Effectuer'
    },
    {
        heading : "En Verification", 
        number:0,
        path:'en-verification',
        image:'en verification.svg',
        desc : `Vous avez ${0} demandes en verification, vous pouvez consulter la table en cliquant ci-dessous`,
        btnText:'Voir'
    },
    {
        heading : "À completer",
        number:0,
        path:'a-completer',
        image:'a completer.svg',
        desc : `Vous avez ${0} Dossiers incomplet, vous pouvez les completer en cliquant ci-dessous`,
        btnText:'Voir'
    },
    {
        heading : "Dossier Traités",
        number:0,
        color:'#fff',
        path:'dossier-traites',
        image:'dossier traite.svg',
        desc : `BRAVO! Vous avez atteint ${0} Assurances, vous pouvez consulter en cliquant ci-dessous`,
        btnText:'Voir'
    },
    {
        heading : "Refusés",
        number:0,
        path:'refuses',
        image:'refuse.svg',
        desc : `DOMMAGE! Vous avez ${0} Dossiers refusees, vous pouvez consulter en cliquant ci-dessous`,
        btnText:'Voir'
    }
    
]
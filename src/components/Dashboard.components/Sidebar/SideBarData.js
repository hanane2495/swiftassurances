import React from "react";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri'

const IconStyle = {
    width:"25px",
    height:"25px", 
    marginRight:'15px'
}

export const SidebarData = [
    {
        heading : "Tableau de bord",
        icon:<RiIcons.RiDashboardFill style={IconStyle}/>,
        number:null,
        path:'tableau-de-bord'
    },
    {
        heading : "Nouvelle Demande",
        icon:<AiIcons.AiFillFileAdd style={IconStyle}/>,
        number:null,
        path:'nouvelle-demande'
    },
    {
        heading : "En Verification", 
        icon:<AiIcons.AiOutlineFileSync style={IconStyle}/>,
        number:0,
        color:'#fff',
        path:'en-verification'
    },
    {
        heading : "À completer",
        icon:<RiIcons.RiFileChart2Fill style={IconStyle}/>,
        number:0,
        color:'#fff',
        path:'a-completer',
    
    },
    {
        heading : "Dossier Traités",
        icon:<AiIcons.AiOutlineFileDone style={IconStyle}/>,
        number:0,
        color:'#fff',
        path:'dossier-traites'
    },
    {
        heading : "Refusés",
        icon:<AiIcons.AiFillFileExcel style={IconStyle}/>,
        number:0,
        color:'#fff',
        path:'refuses'
    },
    {
        heading : "liste-des-clients",
        icon:<FaIcons.FaUsers style={IconStyle}/>,
        number:null,
        path:'liste-des-clients'
    },
    {
        heading : "Rapport",
        icon:<AiIcons.AiOutlineFileProtect style={IconStyle}/>,
        number:null,
        path:'rapport'
    },
    {
        heading : "Revenus",
        icon:<RiIcons.RiMoneyEuroCircleFill style={IconStyle}/>,
        number:null,
        path:'revenus'
    },
    
]
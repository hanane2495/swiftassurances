import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'


export const NavConnected = styled.nav`
background : #fff;
height : 80px;
display : flex;
justify-content : flex-start;
align-items: stretch;
padding : 0 2%;
position: sticky;
top: 0;
z-index : 999; 
`


export const NavLogo =  styled(Link)`
justify-self: flex-start;
cursor: pointer;
text-decoration: none;
display: flex;
align-items: center;
`

export const LogOutIcon = styled.div`
  display : block;
    position : absolute;
    top : 0;
    right : 0;
    margin: 0;
    padding: 10px ;
    padding-right: 20px;
    font-size: 2rem;
    cursor : pointer;
`

export const NavMenuConnected = styled.div`
display: flex;
align-items: center;
`

export const showSidebarIcon = styled.div`
    
`
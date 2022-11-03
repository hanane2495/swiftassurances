import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'
import { Container } from '../../GlobalStyles'


export const Nav = styled.nav`
background : #fff;
height : 80px;
display : flex;
justify-content : center;
align-items: center;
padding : 0.5rem calc((90vw - 1000px) / 2);
position: sticky;
top: 0;
z-index : 999; 
`

export const NavbarContainer = styled(Container)`
display: flex;
justify-content: space-between;
height: 80px;

${Container}
`
export const NavLogo =  styled(Link)`
justify-self: flex-start;
cursor: pointer;
text-decoration: none;
display: flex;
align-items: center;
`

export const NavLink = styled(Link)`
color : #0CDB0E;
display: flex;
font-weight: 700;
align-items : center;
height : 100%;
text-decoration : none;
padding : 0 1rem;
cursor : pointer;

&.active {
    color : #200752;
}

@media screen and (max-width: 960px){
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &.active {
    color : #200752;
    transition: all 0.3s ease;
    }
}

`

export const MobileIcon = styled.div`
display :  none;

@media screen and (max-width : 960px) {
    display : block;
    position : absolute;
    top : 0;
    right : 0;
    margin: 0;
    padding: 0;
    transform: translate(-100%, 60%);
    font-size: 2rem;
    cursor : pointer;
}
`


export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;

@media screen and ( max-width : 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({click}) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #fff;
}
`

export const NavItem =  styled.li`
list-style-type: none;
height: 80px;
border-bottom: 2px solid transparent;

&:hover { 
    border-bottom: 2px solid #0CDB0E;
}

@media screen and (max-width: 960px) {
    width: 100%;
    &:hover{
        border: none;
    }
}
`

export const NavLinks = styled(Link)`
color: #200752;
display: flex;
align-items: center;
text-decoration: none;
padding: 0.2rem 1rem;
height: 100%;
font-weight: 500;

&:hover{
        text-decoration: none;
        color: #0CDB0E;
        transition: all 0.3s ease;
    }

@media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover{
        color: #0CDB0E;
        transition: all 0.3s ease;
    }
}
`

export const NavItemBtn = styled.li`
list-style-type: none;
@media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height:120px
}
`

export const NavBtnLink = styled(Link)`
display: flex;
justify-content: center;
align-items: center;
text-decoration: none;
padding: 8px 16px;
width: 100%;
height: 100%;
border:none;
outline:none;

&:hover{
    text-decoration: none;
    color: #200752;
   }

@media screen and (max-width: 960px) {
   text-decoration: none;

   &:hover{
    text-decoration: none;
   }
}
`

/*
export const NavBtn = styled.nav`
 display: flex;
 align-items: center;
 margin-right: 24px;

 @media screen and (max-width : 768px){
    display: none;
 }
`

export const NavBtnLink = styled(Link)`
border-radius: 10px;
background: #200752;
padding : 10px 22px;
color : #fff;
font-weight: 500;
border : none;
outline: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover{
    transition: all 0.2s ease-in-out;
    background: #fff;
    color : #0CDB0E;
    text-decoration: none;
}
`

export const NavBtnLink1 = styled(Link)`
border-radius: 10px;
border: 2px solid #13C314;
background: white;
padding : 8px 22px;
color : #13C314;
font-weight: 700;
margin-right: 5px;


cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover{
    border: 2px solid #200752;
    transition: all 0.2s ease-in-out;
    background: #fff;
    color : #200752;
    text-decoration: none;
}
`

*/


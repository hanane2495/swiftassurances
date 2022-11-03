import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'


export const Nav = styled.nav`
background : #fff;
height : 60px;
width: 98%;
border-radius: 15px;
display : flex;
justify-content: space-between;
align-items: center;
padding : 0.5rem 2rem ;
position: sticky;
z-index : 999; 
@media screen and (max-width: 960px){
    width: 95%;
    z-index : 1; 
}
`



export const NavLink = styled(Link)`
color : #0CDB0E;
display: flex;
font-weight: 500;
align-items : center;
height : 50%;
text-decoration : none;
padding : 0 1rem;
cursor : pointer;

&.active {
    color : #200752;
}

`

export const MobileIcon = styled.div`
 display : block;
    position : absolute;
    top : 0;
    right : 0;
    margin: 0;
    padding: 0;
    transform: translate(-100%, 60%);
    font-size: 2rem;
    cursor : pointer;
`


export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;


`

export const NavItem =  styled.li`
list-style-type: none;
height: 80px;
padding:0 0.5rem;
display: flex;
flex-direction: row;

`

export const NavLinks = styled(Link)`
color: #200752;
display: flex;
align-items: center;
text-decoration: none;
padding: 0.2rem 0.5rem;
height: 100%;
font-weight: 500;

&:hover{
        text-decoration: none;
        color: #0CDB0E;
        transition: all 0.3s ease;
    }
`

export const NavItemBtn = styled.li`
list-style-type: none;
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
`

export const Title = styled.h1`
color: #200752;
margin: auto 0;
font-weight: 700;
font-size: 1.5rem;

&:hover{
        text-decoration: none;
        color: #0CDB0E;
        transition: all 0.3s ease;
    }
@media screen and (max-width: 800px){
    font-size: 1rem;
    margin-left: 7%;
}
`

export const UserLink = styled(Link)`
color: #200752;
display: flex;
align-items: center;
text-decoration: none;
padding: 0.2rem 0.5rem;
height: 100%;
font-weight: 500;
font-size: 1.2rem;

&:hover{
    text-decoration: none;
    color: #0CDB0E;
    transition: all 0.3s ease;
}

@media screen and (max-width: 960px){
    display: none;
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


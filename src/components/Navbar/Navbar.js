import React from 'react'
import { Nav, 
         NavbarContainer, 
         MobileIcon, 
         NavLogo, 
         NavMenu, 
         NavItem, 
         NavLinks,
         NavItemBtn,
         NavBtnLink,
         } from './NavbarElements'
import {Button} from '../../GlobalStyles'         
import {FaBars, FaTimes} from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { useState, useEffect } from 'react'

const Navbar = () => {

  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click)
  const showButton = () => {
    if(window.innerWidth <= 960){
      setButton(false)
    }else{
      setButton(true)
    }
  }

  useEffect(() => {
    showButton()
  }, [])

  window.addEventListener('resize', showButton)

  return (
    <>
    <IconContext.Provider value={{color:'#200752'}}>
    <Nav>
      <NavbarContainer>
        <NavLogo to = '/'>
           <img style={{height:'200px', width:'200px', marginTop:'20px'}} src={require('../../assets/logo/logo vertical.png')} alt='logo swiftassurances'/>
        </NavLogo>
        <MobileIcon onClick={handleClick}>{click ?  <FaTimes/> : <FaBars/>}</MobileIcon>
        <NavMenu onClick={handleClick} click = {click}>
          <NavItem>
            <NavLinks to ='/'>Accueil</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to ='#contact'>Contact</NavLinks>
          </NavItem>
          <NavItemBtn>
            {button ? (
              <NavBtnLink to ='/signIn'>
                <Button primary> Je m'inscris</Button>
              </NavBtnLink>
            ):(
              <NavBtnLink to ='/signIn'>
                <Button fontBig primary> Je m'inscris</Button>
              </NavBtnLink>
            )}
          </NavItemBtn>
        </NavMenu>
      </NavbarContainer>
    </Nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar

/**
 *       

 */
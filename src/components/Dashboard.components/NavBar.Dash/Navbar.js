import React from 'react'
import { Nav, 
         NavMenu, 
         NavItem, 
         NavLinks,
         Title,
         UserLink
         } from './Navbar.elements'
import {AiOutlineLogout} from 'react-icons/ai'
import {HiOutlineUser} from 'react-icons/hi'
import '../../../App.css'

const Navbar = () => {
  return (
    <>
      <Nav>
          <Title style={{color:'#200752'}}>Bonjour Mohamed !</Title>
          <NavMenu>
            <NavItem>
              <NavLinks to ='profile'>
                  <HiOutlineUser className='nav-icon'/>
              </NavLinks>
              <UserLink to ='profile' >
                Mohamed Ziani
              </UserLink>
            </NavItem>
            <NavItem>
              <NavLinks to ='/'>
                  <AiOutlineLogout className='nav-icon'/>
              </NavLinks>
            </NavItem>
          </NavMenu>
      </Nav>
    </>
  )
}

export default Navbar

/**
 *       

 */
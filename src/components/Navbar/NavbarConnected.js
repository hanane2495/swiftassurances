import React from 'react'
import { 
         NavbarContainer, 
         NavLogo,
         LogOutIcon,
         NavMenuConnected,
         showSidebarIcon,
         NavConnected
         } from './NavbarConnected.elements'
import {FaBars, FaTimes} from 'react-icons/fa'
import {AiOutlineLogout} from 'react-icons/ai'
import { IconContext } from 'react-icons/lib'
import { useState, useEffect } from 'react'

//redux
import {useSelector, useDispatch} from 'react-redux'
import {logOut} from '../../State/Actions/Actions'


const Navbar = () => {

  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch();

  //show/hide sidebar
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar)

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
    <NavConnected>
      <NavMenuConnected>
        <showSidebarIcon onClick={handleClick}>{click ?  <FaTimes style={{width:'2rem', height:'2rem', marginRight:'10px'}}/> : <FaBars style={{width:'2rem', height:'2rem', marginRight:'10px'}}/>}</showSidebarIcon>
        <NavLogo to = '/'>
              <img style={{height:'200px', width:'200px', marginTop:'20px'}} src={require('../../assets/logo/logo vertical.png')} alt='logo swiftassurances'/>
        </NavLogo>
      </NavMenuConnected>
        
         
       
        <NavMenuConnected>
          <LogOutIcon onClick={() => dispatch(logOut())}>
            <AiOutlineLogout/>
          </LogOutIcon>
        </NavMenuConnected>  
    </NavConnected>
    </IconContext.Provider>
    </>
  )
}

export default Navbar

/**
 *       

 */
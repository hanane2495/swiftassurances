import React, { useState } from "react";
import "./Sidebar.css";
import { SidebarData } from "./SideBarData";
import { motion } from "framer-motion";
import {FaBars} from 'react-icons/fa'
import {AiOutlineLogout} from 'react-icons/ai'
import {SideBarLink} from './SideBar.elements'
const Sidebar = () => {

  const [selected, setSelected] = useState(0);

  const [expanded, setExpaned] = useState(true)

  const sidebarVariants = {
    true: {
      left : '0'
    },
    false:{
      left : '-60%'
    }
  }
  console.log(window.innerWidth)
  return (
    <>
      <div className="bars" style={expanded?{left: '65%', top:'4%'}:{left: '7%', top:'4%'}} onClick={()=>setExpaned(!expanded)}>
        <FaBars />
      </div>
    <motion.div className='sidebar'
    variants={sidebarVariants}
    animate={window.innerWidth<=768?`${expanded}`:''}
    >
      {/* logo */}
      <div className="logo">
        <img style={{height:'180px', width:'180px'}} src={require('../../../assets/logo/logo vertical.png')} alt="logo" />
      </div>

      <div className="menu">
        {SidebarData.map((item, index) => {
          return (
            <div
              className={selected === index ? "menuItem activated" : "menuItem"}
              key={index}
              onClick={() => setSelected(index)}
            >
              <SideBarLink style={selected === index ? {color:'#fff'} : {color:'#200752'}} to={item.path}> 
                {item.icon} 
                <span>
                  {item.heading}
                  {item.number === null ? null :
                    <span style={{background:item.color, padding:'8px 10px', marginLeft:'5px', borderRadius:'5px',opacity:'0.5', fontWeight:'500' }}>
                    {item.number}
                    </span>
                  }
                </span>
              </SideBarLink>
            </div>
          );
        })}
      </div>
    </motion.div>
    </>
  )
}

export default Sidebar
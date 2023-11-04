import React from 'react'
import {AnimatePresence, motion} from "framer-motion";
import {RiDashboardFill, RiSettings3Fill, RiAccountBoxFill } from "react-icons/ri";
import {FaSignOutAlt,FaBars} from "react-icons/fa"
import {DiGoogleAnalytics} from "react-icons/di";
import {TbHelpOctagonFilled} from "react-icons/tb"
import {BsHeartPulseFill} from "react-icons/bs"
import { NavLink } from 'react-router-dom';
import { useState } from 'react';


const routes = [
    {
        path : "/Dashboard",
        name : "Home",
        icon : <RiDashboardFill/>,
    },
    {
        path : "/Insights",
        name : "Insights",
        icon : <DiGoogleAnalytics/>,
    },
    {
        path : "/Health",
        name : "Health",
        icon : <BsHeartPulseFill/>,
    },
    {
        path : "/Help",
        name : "Help",
        icon : <TbHelpOctagonFilled/>, 
    },
    {
        path : "/Settings",
        name : "Settings",
        icon : <RiSettings3Fill/>, 
    },
    {
        path : "/Profile",
        name : "Profile",
        icon : <RiAccountBoxFill/>, 
    },
    {
        path : "/",
        name : "SignOut",
        icon : <FaSignOutAlt/>, 
    },
]

export const Sidebar = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const animation = {
    hidden:{
        width:0,
        opacity:0,
        transition:{
            duration: 0.5,
        },
    },
    show:{
        width:"auto",
        opacity:1,
        transition:{
            duration:0.2,
        },
    },
  }

  return (
    <div className='main-sidebar'>
    <motion.div animate={{"width": isOpen ? "200px" : "52px"}}
     className='sidebar'>

    <div className='topSection'>
    {isOpen && (
        <motion.h1
         className='logoSection'
         variants={animation}
         initial="hidden"
         animate="show"
         exit="hidden"
         >
         LOGO
         </motion.h1> 
        )}
        {/* <h1 className='logoSection'>
        LOGO
        </h1> */}
        <div className='bars'>
            <FaBars onClick={toggle}/>
        </div>
    </div>
    

    <section className='sidebar-routes'>
        {routes.slice(0, routes.length-1).map((route) => (
            <NavLink to={route.path} key={route.name} className="link">
            <div className='icon'>{route.icon}</div>
            <AnimatePresence>
            {isOpen &&  (
                <motion.div
                variants={animation}
                initial="hidden"
                animate="show"
                exit="hidden"
                 className='icon-text'>
                 {route.name}
                 </motion.div>
                )}
            </AnimatePresence>
            </NavLink>
        ))}
    </section>

    <section className='bottom-routes'>
          {routes.slice(-1).map((route) => (
            <NavLink to={route.path} key={route.name} className='link'>
              <div className='icon'>{route.icon}</div>
              <AnimatePresence>
              {isOpen && (
                <motion.div
                 variants={animation}
                initial="hidden"
                animate="show"
                exit="hidden" 
                className='icon-text'>
                {route.name}
                </motion.div>
                )}
              </AnimatePresence>
            </NavLink>
          ))}
        </section>

    </motion.div>
    <main>
        {children}
    </main>
   
    </div>
  )
}

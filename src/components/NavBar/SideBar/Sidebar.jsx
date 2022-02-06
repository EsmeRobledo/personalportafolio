import React from "react";
import {FaTimes} from 'react-icons/fa'
import {Link as LinkS} from 'react-scroll'



export default function Sidebar ({isOpen, toggle}){
    return(
    <aside className="SidebarContainer" isOpen={isOpen} onClick={toggle}>
        <div className="Icon" onClick={toggle}>
            <FaTimes className='CloseIcon'/>
        </div>
        <div className="SidebarWrapper">
            <ul className="SidebarMenu">
                <LinkS to='about' onClick={toggle} className="SidebarLink"> About Me</LinkS>
                <LinkS to='menu' onClick={toggle} className="SidebarLink"> My Work</LinkS>
                <LinkS to='reservaciones' onClick={toggle} className="SidebarLink"> My Experince</LinkS>
                <LinkS to='Services' onClick={toggle} className="SidebarLink"> Contact me </LinkS>
            </ul>
        </div>
    </aside>
    )
}

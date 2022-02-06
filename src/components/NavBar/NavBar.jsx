import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-scroll';


export default function NavBar({toggle}) {
    const [scrollNav, setScroolNav] = useState(false)
    const changeNav = ()=> {
        if(window.scrollY >= 80){
            setScroolNav(true)
        }else{
            setScroolNav(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

   
    return (
    <nav className='NavWrapper' scrollNav={scrollNav}>
    <div className='NavbarContainer'>
        <Link to='/'  className="NavLogo">ERobledo</Link>
        <div onClick={toggle} className='MobileIcon'>
            <FaBars/>
        </div>
        <ul className='NavMenu'>
           <li className='NavItem'>
                <Link to='' className='NavLinks'>About Me</Link>
            </li > 
           <li className='NavItem'>
                <Link to='' className='NavLinks'>My Work</Link>
           </li>
           <li className='NavItem'>
                <Link to='' className='NavLinks'>My Experince</Link>
           </li>
           <li className='NavItem'>
                <Link to='' className='NavLinks'>Contact me</Link>
           </li>
        </ul>
    </div>
</nav>
);
}

import React from 'react';

import './navbar.scss'

import logo from '../../assets/images/on-juno-logo.png'
import hamburger from '../../assets/images/hamburger.svg'


import SubMenu from '../submenu/submenu'
import PrimaryButton from '../buttom/solidButton'

const Navbar = () => {
    const toggleMenu = ()=>{
        document.querySelector(".navbar").classList.toggle("active")
        document.querySelector(".menu-container").classList.toggle("active")
        document.querySelector(".btnCnt").classList.toggle("active")
    }
    return(
        
        <div className="navbarCnt" >
            <div className="navbar">
            <div className="nav1">
            <div className="logoCnt">
                <a className="logo" href="#hello"><img src={logo} alt="on-juno-logo" /></a>
            </div>
            <img onClick={toggleMenu} className="hamburger" src={hamburger} alt="drop-menu"/>
            </div>
            <div className="menu-container">
                <ul className="menu">
                <SubMenu value={"Company"}/>
                    <SubMenu value={"Company"}/>
                    <SubMenu value={"Learn"}/>
                    <SubMenu value={"Legal"}/> 
                </ul>
            </div>
            <div className="btnCnt">
            <div style={{marginRight:"1rem"}}><PrimaryButton style={{marginRight:"1rem"}} text={"Login"} btnType="primary" /></div>
            <div style={{marginRight:"1rem"}}><PrimaryButton text={"Signup"} btnType="ghost"  /></div>
            </div>
            </div>
            
            
        </div>
    );
}

export default Navbar;
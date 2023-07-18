import React, { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { Link } from "react-scroll"
import "./NavBar.css"
import Button from "../Button/Button"

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                <Link to='/' className='logo'>
                    <img src="/images/logo.png" alt='logo' />
                </Link>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: "#ffffff" }} />)
                        : (<FaBars size={30} style={{ color: "#ffffff" }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <Link to="/" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="menu" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Menu</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="servicios" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Servicios</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="ubicaciones" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Ubicaciones</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="horario" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Horarios</Link>
                    </li>
                </ul>
                <Button text="Contact us" whatsapp={true} backgroundcolor={"#fff"} colortext={"#000"}/>
            </nav>
        </div>
    )
}

export default Navbar
import React from "react"
import "./PrincipalPage.css"
import NavBar from "../../components/NavBar/NavBar"
import Footer from "../../components/Footer/Footer"
import Textdescbutton from "../../components/Textdescbutton/Textdescbutton"
import Title from "../../components/Title/Title"

const PrincipalPage = () => {

    return (
        <div className='principalPage'>
            <div className='principalPage__header'>
                <NavBar />
            </div>
            <section id='/' className="home">
                <div className='home__content'>
                    <Textdescbutton title1="RESTAURANTE" title2="Exclusive fine dining." textbutton="Ordenar" buttoncolor="#B2945B" color="#fff" textcolor="#fff" fontsize="4.5rem"/>
                    <img src="/images/homebanner.png" alt="home" className="home__img"/>
                </div>
            </section>
            <section id='menu' className="menu">
                <div className='menu__content'>
                    <img src="/images/menu.png" alt="menu" className="menu__img"/>
                    <Textdescbutton title1="MENU" title2="Making The Delicious Food" textbutton="Ver menú" buttoncolor="#B2945B" color="#fff" textcolor="#000" fontsize="4.5rem"/>
                </div>
            </section>
            <section id='servicios' className="services">
                <div className='services__content'>
                    <Title title1="SERVICIOS" title2="First-Class Dining Experience" column color="#fff" fontsize="4.5rem"/>
                </div>
            </section>
            <section id='ubicaciones' className="location">
                <div className='location__content'>
                    <Title title1="UBICACIONES" title2="Find Us" column color="#fff" fontsize="4.5rem"/>
                    <div className='location__content__map'>
                        <img src="/images/location.png" alt="map" className="location__content__map__img"/>
                        <Title title1="EDIFICIO ZENIT" title2="9a. Avenida 19-61 zona 10" column color="#fff" fontsize="4.5rem"/>
                    </div>
                </div>
            </section>
            <section id='horario' className="horario">
                <div className='horario__content'>
                    <img src="/images/horario.png" alt="horario" className="horario__img"/>
                    <Textdescbutton title1="HORARIO" title2="Opening Hours" textbutton="Ver horario" buttoncolor="#B2945B" color="#fff" textcolor="#000" fontsize="4.5rem"/>
                </div>
            </section>
            <section id='contact' className="contact">
                <div className='contact__content'>
                    <h1>contact</h1>
                </div>               
            </section>
            <section id='footer' className="footer">
                <div className='footer__content'>
                    <Footer />
                </div>
            </section>

        </div>
    )
}

export default PrincipalPage


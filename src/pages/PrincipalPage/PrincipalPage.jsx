import React from "react"
import "./PrincipalPage.css"
import NavBar from "../../components/NavBar/NavBar"
import Footer from "../../components/Footer/Footer"

const PrincipalPage = () => {

    return (
        <div className='principalPage'>
            <div className='principalPage__header'>
                <NavBar />
            </div>
            <section id='/' className="home">
                <div className='home__content'>
                    <h1>Home</h1>
                </div>
            </section>
            <section id='menu' className="menu">
                <div className='menu__content'>
                    <h1>menu</h1>
                </div>
            </section>
            <section id='servicios' className="contacts">
                <div className='contacts__content'>
                    <h1>Servicios</h1>
                </div>
            </section>
            <section id='ubicaciones' className="location">
                <div className='location__content logo-container'>
                    <h1>location</h1>
                </div>
            </section>
            <section id='horario' className="horario">
                <div className='horario__content'>
                    <h1>horario</h1>
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


import React from "react"
import PropTypes from "prop-types"
import "./Button.css"

const Button = ({ text, whatsapp, backgroundcolor,colortext }) => {
    const handleClick = () => {
        if (whatsapp) {
            handleWhatsapp()
        }
    }

    const handleWhatsapp = () => {
        const phoneNumber = "1234567890"
        const message = "Hello"
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
        window.open(url, "_blank")
    }

    return (
        <button className='btn' onClick={handleClick} style={{ backgroundColor: backgroundcolor,  color: colortext }}>
            {text}
        </button>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    whatsapp: PropTypes.bool,
    backgroundcolor: PropTypes.string,
    colortext: PropTypes.string
}

export default Button

import React from "react"
import styles from "./Contact.module.css"


const Contact = () => {
    
    return (
        <div className={styles.container}>
            <div className="contact__content__info__container">
                <h2> A continuación puede ponerse en contacto con Restaurante Luka. </h2>
                <p className="contact__content__info__p"> Deja tu mensaje y nos pondremos en contacto contigo lo antes posible. También puede comunicarse con nosotros los días hábiles a través del número a continuación. </p>
                    <div className="contact__content__info__phone">
                        <img src="/images/phone.svg" alt="contact" className="contact__content__info__img"/>
                        <h4> +502 2222-2222 </h4>
                    </div>
            </div>
            <div className={styles.contactinfo}>
                <div className={styles.contactright}>
                    <form >
                        <input type="text" placeholder="Nombres" name="from_name" />
                        <input type="text" placeholder="Apellidos" name="last_name" />
                        <input type="text" placeholder="Correo" name="reply_to" />
                        <input type="text" placeholder="Teléfono" name="cellphone" />
                        <textarea
                            id=""
                            cols="30"
                            rows="10"
                            placeholder="Mensaje"
                            name="message"
                        />
                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact

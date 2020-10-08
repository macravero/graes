import React from 'react'
import styles from './pageStyles/contacto.module.scss'
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactoBanner from '../images/banner-contacto.jpg'
import Contacto from '../images/contacto.png'
import Direccion from '../images/direccion.png'
import Telefono from '../images/telefono.png'

const ContactoPage = () => {
  return (
    <Layout>
      <SEO title="Servicios" />
      <div className={styles.container}>
      <img src={ContactoBanner} alt="Contacto"/>
      <div className={styles.section}>
        <img src={Contacto} alt="Contacto"/>
        <h2>CONTACTO</h2>
        <p className={styles.italic}>Nuestro equipo se pondrá en contacto con usted a la brevedad.</p>
      </div>
      <form action="post">
            <input type="text" placeholder='Nombre:'/>
            <input type="text" placeholder='Apellido:'/>
            <input type="email" placeholder='Email:'/>
            <input type="tel" placeholder= 'Teléfono'/>
            <textarea placeholder='Escriba su mensaje aquí'/>
            <button className={styles.link} type='submit'>ENVIAR</button>
      </form>
      <div className={styles.section}>
        <div className={styles.flex}>
            <img src={Direccion} alt="Direccion"/>
            <p>Paseo de la Castellana 57, 28057, Madrid, España.</p>
        </div>
        <div className={styles.flex}>
            <img src={Telefono} alt="Telefono"/>
            <p>91 870 00 00 / 91 800 00 00</p>
        </div>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.64503995663!2d-3.693701584655294!3d40.438858179362484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4228ee0b29ae47%3A0x2015f79230358881!2sPaseo%20de%20la%20Castellana%2C%2057%2C%2028046%20Madrid%2C%20Spain!5e0!3m2!1sen!2sar!4v1601449851535!5m2!1sen!2sar" title="google map" frameborder="0" allowfullscreen="" aria-hidden="false"></iframe>
    </div>
    </Layout>
  )
}

export default ContactoPage

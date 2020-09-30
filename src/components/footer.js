import React from 'react'
import { Link } from "gatsby"
import styles from './footer.module.scss'
import FooterLogo from '../images/logo-footer.png'
const Footer = () => {
  return (
    <footer className={styles.container}>
      <ul>
        <li><Link to='/nosotros'>¿QUIÉNES SOMOS?</Link></li>
        <li><Link to='/causas'>CAUSAS</Link></li>
        <li><Link to='/servicios'>SERVICIOS</Link></li>
        <li><Link to='/covid19'>RESPUESTA COVID-19</Link></li>
        <li><Link to='/trayectoria'>TRAYECTORIA</Link></li>
        <li><Link to='/clientes'>CLIENTES</Link></li>
        <li><Link to='/cookies'>POLÍTICA DE COOKIES</Link></li>
        <li><Link to='/sitemap'>MAPA DEL SITIO</Link></li>
        <li><Link to='/contacto'>CONTACTO</Link></li>
      </ul>
      <img src={FooterLogo} alt='Graes web' />
      <div className={styles.infoContainer}>
        <p>Paseo de la Castellana 57</p>
        <p>(28057) Madrid, España.</p>
        <p>91 870 00 00 / 91 800 00 00</p>
      </div>
    </footer>
  )
}

export default Footer

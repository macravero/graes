import React, { useState } from 'react'
import styles from './mobileNavbar.module.scss'
import { Link } from "gatsby"
const MobileNav = () => {
  const [toggled, setToggle] = useState(false);
  return (
    <div className={styles.container}>
    <div className={styles.toggleWrapper}>
      <input type="checkbox" onClick={()=>setToggle(!toggled)} />
      <span></span>
      <span></span>
      <span></span>
    </div>
      <ul className={styles.menu} style={toggled ? {transform: 'none'} : null}>
        <Link className={styles.link}to="/nosotros" activeStyle={{ color: "#A60816" }}><li>¿Quiénes somos?</li></Link>
        <Link className={styles.link}to="/causas" activeStyle={{ color: "#A60816" }}><li>Nuestras causas</li></Link>
        <Link className={styles.link}to="/servicios" activeStyle={{ color: "#A60816" }}><li>Nuestros servicios</li></Link>
        <Link className={styles.link}to="/covid19" activeStyle={{ color: "#A60816" }}><li>respuesta covid-19</li></Link>
        <Link className={styles.link}to="/trayectoria" activeStyle={{ color: "#A60816" }}><li>alcance y trayectoria</li></Link>
        <Link className={styles.link}to="/contacto" activeStyle={{ color: "#A60816" }}><li>contacto</li></Link>
      </ul>
    </div>
  )
}

export default MobileNav

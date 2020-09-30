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
        <Link className={styles.link}to="/nosotros"><li>Quienes somos?</li></Link>
        <Link className={styles.link}to="/causas"><li>causas</li></Link>
        <Link className={styles.link}to="/servicios"><li>servicios</li></Link>
        <Link className={styles.link}to="/covid19"><li>respuesta covid-19</li></Link>
        <Link className={styles.link}to="/trayectoria"><li>trayectoria</li></Link>
        <Link className={styles.link}to="/clientes" disabled><li>clientes</li></Link>
        <Link className={styles.link}to="/contacto"><li>contacto</li></Link>
      </ul>
    </div>
  )
}

export default MobileNav

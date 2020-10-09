import React from 'react'
import styles from './desktopNav.module.scss'
import { Link } from "gatsby"

const DesktopNav = () => {
    return (
        <div className={styles.container}>
            <Link to='/' activeStyle={{ color: "#A60816" }}>home</Link>
            <Link to='/nosotros' activeStyle={{ color: "#A60816" }}>¿Quiénes somos?</Link>
            <Link to='/causas' activeStyle={{ color: "#A60816" }}>causas</Link>
            <Link to='/servicios' activeStyle={{ color: "#A60816" }}>servicios</Link>
            <Link to='/covid19' activeStyle={{ color: "#A60816" }}>apoyo covid-19</Link>
            <Link to='/trayectoria' activeStyle={{ color: "#A60816" }}>trayectoria</Link>
            <Link to='/contacto' activeStyle={{ color: "#A60816" }}>contacto</Link>
        </div>
    )
}

export default DesktopNav

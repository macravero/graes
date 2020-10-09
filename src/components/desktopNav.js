import React from 'react'
import styles from './desktopNav.module.scss'
import { Link } from "gatsby"

const DesktopNav = () => {
    return (
        <div className={styles.container}>
            <Link to='/'>home</Link>
            <Link to='/nosotros'>¿Quiénes somos?</Link>
            <Link to='/causas'>causas</Link>
            <Link to='/servicios'>servicios</Link>
            <Link to='/covid19'>apoyo covid-19</Link>
            <Link to='/trayectoria'>trayectoria</Link>
            <Link to='/contacto'>contacto</Link>
        </div>
    )
}

export default DesktopNav

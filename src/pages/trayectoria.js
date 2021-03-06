import React from 'react'
import styles from './pageStyles/trayectoria.module.scss'
import Layout from "../components/layout"
import Aliados from '../components/aliados'
import SEO from "../components/seo"
import TrayectoriaBanner from '../images/banner-trayectoria.jpg'
import TrayectoriaBannerDesktop from '../images/banner-trayectoria-desktop.jpg'
import Alcance from '../images/alcance.png'
import Alianzas from '../images/alianzas.png'
const TrayectoriaPage = () => {
  let isMobile
  if (typeof window !== `undefined`) {
    isMobile = window.matchMedia('(max-width: 600px)').matches
  }
  return (
    <Layout>
      <SEO title="Home" />      
      <div className={styles.container}>
      <img src={TrayectoriaBanner} alt="Trayectoria" className='mobileOnly'/>
      <img src={TrayectoriaBannerDesktop} className='desktopOnly' alt="Trayectoria"/>
      <div className={styles.section}>
        <div>
          <img src={Alcance} alt="Alcance y Trayectoria"/>
          <h2 className={styles.red}>ALCANCE Y TRAYECTORIA</h2>
          <p>Nuestra experiencia y trayectoria abarca más de dos
          décadas de trabajo fructífero en 4 continentes. </p>
        </div>
        <div>
          <h2>Focos Geográficos <br/>de Interés</h2>
          <p>GRAES, de manera directa e indirecta, a través de
          empresas fundadoras y aliados estratégicos, ha
          participado exitosamente en la prevención,
          mitigación, estabilización y normalización de
          Emergencias Sociales en Europa, Asia, África,
          Norteamérica, Suramérica, Centroamérica y el Caribe. </p>
        </div>
        <div>
          <h2>Certificaciones</h2>
          <p>Por la experiencia acumulada y la dilatada trayectoria
          en el control de Situaciones de Emergencia, el grupo
          fundador de GRAES cuenta hoy con las más exigentes
          certificaciones de ONU y OTAN, de Calidad de
          Productos y Ejecución de Proyectos.</p>
        </div>
        <div>
          <h2>Alianzas</h2>
          <p>Integrados en GRAES, hemos forjado una red de alianzas
          estratégicas con instituciones públicas líderes, instituciones
          multilaterales, Gobiernos, ONGs, prestigiosos centros de
          estudio y excelencia, entidades privadas y Think-Tanks, entre
          los cuales destacan:</p>
        </div>
        {!isMobile && <Aliados/>}
      {isMobile && <img src={Alianzas} className={styles.alianzas}alt="Alianzas"/>}
      </div>
    </div>
    </Layout>
  )
}

export default TrayectoriaPage

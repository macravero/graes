import React from 'react'
import { Link } from 'gatsby'
import styles from './pageStyles/nosotros.module.scss'
import Layout from "../components/layout"
import Aliados from '../components/aliados'
import SEO from "../components/seo"
import Nosotros from '../images/nosotros-header.jpg'
import NosotrosDesktop from '../images/nosotros-desktop.jpg'
import QuienesSomos from '../images/quienes-somos-gris.png'
import Mision from '../images/mision.png'
import Vision from '../images/vision.png'
import Lastimadx from '../images/lastimadx.jpg'
import Equipo from '../images/equipo.png'
import Soluciones from '../images/soluciones-a-medida.png'
import Historia from '../images/historia.png'
import Hospital from '../images/hospital.jpg'


const NosotrosPage = () => {
  return (
    <Layout>
      <SEO title="Quienes somos" />
      <div className={styles.container}>
      <img src={Nosotros} alt="Nosotros" className="mobileOnly"/>
      <img src={NosotrosDesktop} alt="Nosotros" className="desktopOnly"/>
      <div className={styles.section}>
        <div style={{order: '1'}}>
          <img src={QuienesSomos} alt="Quienes somos"/>
          <h2>¿QUIÉNES SOMOS?</h2>
          <p>GRAES es un orquestador instrumental para la región Iberoamericana en prevenir, mitigar y estabilizar Emergencias Sociales.</p>
          <Link to='/trayectoria'>Alcance y trayectoria <span>></span></Link>
        </div>
        <div style={{order: '2'}}>
          <img src={Mision} alt="Mision"/>
          <h2>MISIÓN</h2>
          <p>Nuestra misión es propiciar el impulso de los Objetivos de Desarrollo Sostenible de Naciones Unidas, con la misión de contribuir a salvar vidas y aliviar sufrimiento en comunidades con situaciones de crisis y Emergencia Social. Nos especializamos en intervenciones ante estas Emergencias, especialmente en <Link to='/causas'>estos sectores <span>></span></Link></p>
        </div>
        <div style={{order: '4'}}>
          <img src={Vision} alt="Vision"/>
          <h2>VISIÓN</h2>
          <p>GRAES tiene como objetivo la atención y contención de Emergencias Sociales, con profesionalismo independiente, prescindiendo de los factores ideológicos o políticos presentes, en el País o los Países, o en el Gobierno o los Gobiernos, donde se presenta la Emergencia que debe ser atendida.</p>
        </div>
        <img  style={{order: '3'}}src={Lastimadx} className={styles.posterImage} alt="Lastimadx"/>
        <div style={{order: '5'}}>
          <img src={Equipo} alt="Equipo"/>
          <h2>EQUIPO</h2>
          <p>Nuestro equipo especializado reúne profesionales y expertos en consultoría, en economía de desarrollo, en manejo de emergencias y catástrofes naturales, ingenieros, equipos de voluntarios, y en general, cuenta con el talento humano especializado en la gestión de proyectos sociales internacionales, destinados a ayudar a Comunidades, Estados y Organizaciones, en problemas estratégicos y operativos vinculados a Emergencias Sociales. </p>
        </div>
        <img  style={{order: '6'}}src={Hospital} className={styles.posterImage}  alt="Hospital"/>
        <div style={{order: '7'}}>
          <img src={Soluciones} alt="Soluciones"/>
          <h2>SOLUCIONES A LA MEDIDA</h2>
          <p>Nuestras soluciones se basan en un entendimiento profundo de las causas y la naturaleza de los problemas prevalentes en las comunidades afectadas. </p>
          <ul>
            <li>Entendemos las realidades críticas de comunidades en crisis, de la mano de sus líderes.</li>
            <li> Forjamos alianzas con ONGs especializadas con presencia de nuestros profesionales en el terreno. </li>
            <li>Según las necesidades, nuestros expertos en data desarrollan estudios econométricos y cuantitativos directamente, o con Aliados Especializados, a fin de medir el impacto que tienen nuestras soluciones, en los índices de calidad de vida de poblaciones afectadas. </li>
          </ul>
        </div>
        <div style={{order: '8'}}>
          <img src={Historia} alt="Historia"/>
          <h2>NUESTRA HISTORIA</h2>
          <p>Los socios fundadores de GRAES, integrados, cuentan con más de dos décadas de trabajo fructífero en la prevención, mitigación y control de Emergencias Sociales en el Mundo. Su trayectoria puso en evidencia las carencias y necesidades de soporte de la sociedad actual. </p>
          <Link to='/historia'>Vea más <span>></span></Link>
        </div>
      </div>
      <Aliados/>
    </div>
    </Layout>
  )
}

export default NosotrosPage

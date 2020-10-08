import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeCarousel from '../components/Carousels/HomeCarousel'
import AliadosCarousel from '../components/Carousels/AliadosCarousel'
import styles from './pageStyles/index.module.scss'
import QuienesSomos from '../images/quienes-somos.png'
import Alcance from '../images/alcance.png'
import Causas from '../images/causas.png'
import NuestrosServicios from '../images/nuestros-servicios.png'
import RespuestaCovidFondo from '../images/respuesta-covid-fondo.jpg'
import RespuestaCovid from '../images/respuesta-covid.png'
import OpenQuote from '../images/abre-comas.png'
import CloseQuote from '../images/cierre-comas.png'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeCarousel />
    <div className={styles.container}>
      {/* First section */}
      <div className={styles.sectionOne}>
        <img src={OpenQuote} alt=""/>
        <blockquote>Las emergencias son impredecibles y amenazan la integridad de millones de personas vulnerables. ¿Ante los Riesgos y Amenazas? Prevención y cuidadosa planificación. ¿Ante el Desastre? Liderazgo y rapidez para salvar vidas. ¿Ante la Injusticia? Convicción y firmeza para su corrección y erradicación.</blockquote>
        <img src={CloseQuote} alt=""className={styles.closeQuote}/>
        <h1>SOMOS EL GRUPO DE RESPUESTA Y ASISTENCIA EN EMERGENCIAS SOCIALES. <strong>SOMOS GRAES.</strong></h1>
      </div>
      {/* Second section */}
      <div className={styles.sectionTwo}>
        <img src={QuienesSomos} alt="quienes somos"/>
        <h2>¿QUIÉNES SOMOS?</h2>
        <p>Somos una empresa española de vanguardia, de consultoría internacional, dedicada al diseño y desarrollo de proyectos sostenibles de Prevención, Gestión y Control de Emergencias Sociales, con alto impacto para poblaciones vulnerables.</p>
        <Link to='/nosotros' className={styles.link}>CONÓZCANOS</Link>
      </div>
      <div className={styles.sectionThree}>
        <img src={Alcance} alt="Alcance"/>
        <h2>ALCANCE Y TRAYECTORIA</h2>
        <Link to='/trayectoria'>Vea más <span>&gt;</span></Link>
      </div>
      <div className={styles.sectionFour}>
        <img src={Causas} alt="Causas"/>
        <h2>NUESTRAS CAUSAS</h2>
        <p>Nuestro compromiso es propiciar el impulso de los Objetivos de Desarrollo Sostenible de Naciones Unidas, con la misión de contribuir a salvar vidas y aliviar sufrimiento de poblaciones vulnerables. Somos una fuerza conjunta equipada para lidiar con Emergencias Sociales de todo tipo. </p>
      <Link to='/' className={styles.link}>DESCUBRA MÁS</Link>
      </div>
      <div className={styles.sectionFive}>
        <img src={NuestrosServicios} alt="Nuestros servicios"/>
        <h2>NUESTROS SERVICIOS</h2>
        <p>GRAES se centra en la consultoría integral de desarrollo sostenible en Emergencias Sociales. Nos especializamos en la investigación, fabricación de tecnologías, ejecución de proyectos y formulación de propuestas relacionadas con afectaciones y riesgos en comunidades vulnerables. </p>
        <p>El abordaje de proyectos abarca desde las fases tempranas de diagnóstico y prevención en contextos de Emergencias, a las etapas de contención temprana y respuesta para atender Crisis en desarrollo. Proporcionamos a nuestros clientes, los modelos y herramientas necesarias para la gestión de este tipo de proyectos en todas sus etapas.</p>
        <Link to='/' className={styles.link}>VER TODOS</Link>
      </div>
      <img src={RespuestaCovidFondo} alt="Respuesta COVID"/>
      <div className={styles.sectionSix}>
        <img src={RespuestaCovid} alt="Respuesta COVID"/>
        <h2>RESPUESTA ANTE COVID 19</h2>
        <p>La crisis global generada por la Pandemia del COVID-19 amenaza a comunidades vulnerables y revierte los logros de desarrollo sostenible. Conozca nuestra respuesta activa y directa en la lucha contra la Pandemia.</p>
        <Link to='/' className={styles.link}>VER IMPACTO</Link>
      </div>
      <p className={styles.allies}>ALIADOS ESTRATÉGICOS</p>
    </div>
    <AliadosCarousel />
  </Layout>
)

export default IndexPage

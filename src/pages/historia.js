import React from 'react'
import { Link } from 'gatsby'
import styles from './pageStyles/historia.module.scss'
import Layout from "../components/layout"
import Aliados from '../components/aliados'
import SEO from "../components/seo"
import Historia from '../images/historia.png'
import Hospital from '../images/hospital.jpg'
import Carpa from '../images/carpa.png'

const HistoriaPage = () => {
  return (
    <Layout>
      <SEO title="Historia" />
      <div className={styles.container}>
      <img src={Hospital} alt="Hospital"/>
      <div className={styles.section}>
        <img src={Historia} alt="Historia"/>
        <h2>NUESTRA HISTORIA</h2>
        <p>En el año 2006, se creó la Unidad Militar de Emergencias (UME): un instrumento al servicio del Estado Español, con capacidades propias para responder con garantías, a situaciones de Emergencias y Catástrofes. </p>
        <p>Desde su creación, la UME ha visto aumentado su protagonismo y responsabilidad, en la respuesta a Catástrofes y en la Atención de fenómenos de Emergencia Social Contemporánea. Por ejemplo, la UME ha dirigido más de 400 intervenciones ante todo tipo de riesgos, en España y en el Mundo, convirtiéndose en una unidad de referencia internacional en Gestión de Emergencias</p>
      </div>
      <img src={Carpa} alt="Carpa"/>
      <div className={styles.section}>
        <p>En este contexto, nacen distintas iniciativas privadas para sumarse a este tipo de circunstancias, respaldando a Gobiernos o instituciones públicas como la UME. Así, el grupo empresarial fundador de GRAES, ha tenido participación relevante en el desarrollo y ejecución de políticas de implantación coordinadas por la UME. Igualmente, se ha participado en respaldo a la Gestión y Control de Emergencias realizadas en distintos momentos por Autoridades Españolas.</p>
        <p>Con el “Know-How” adquirido, en marco de colaboración y prestación de servicios recurrentes con la UME, el Grupo Fundador de GRAES, de manera directa e indirecta, y a través de sus empresas fundadores y aliados estratégicos, ha acumulado experiencias exitosas en la prevención, mitigación, estabilización y normalización de Emergencias Sociales en Europa, Asia, Norteamérica, Suramérica, Centroamérica y El Caribe.</p>
        <Link to='/'><span>&lt;</span> Volver al Home</Link>
      </div>
      <Aliados/>
    </div>
    </Layout>
  )
}

export default HistoriaPage

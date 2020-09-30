import React from 'react'
import styles from './pageStyles/covid.module.scss'
import Layout from "../components/layout"
import SEO from "../components/seo"
import CovidCarousel from '../components/Carousels/CovidCarousel'
import CovidBanner from '../images/covid-banner.png'
import RtaCovidLogo from '../images/respuesta-covid.png'
const CovidResponsePage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className={styles.container}>
      <img src={CovidBanner} alt="Respuesta Covid"/>
      <div className={styles.section}>
        <img src={RtaCovidLogo} alt="Respuesta a COVID"/>
        <h2>RESPUESTA ACTIVA ANTE COVID-19</h2>
        <p>GRAES ha asistido en la respuesta ante el COVID-19 de
        diversas maneras, contribuyendo de manera directa y
        efectiva, en la lucha contra la pandemia. Hemos desarrollado
        e implementado proyectos de consultoría para la mitigación,
        construcción de infraestructura crítica y suministrados
        insumos médicos en diferentes continentes.</p>
        <p>Ante la Emergencia pronunciada en España, GRAES y sus
        socios asisten a la Unidad Militar de Emergencias,
        construyendo tres hospitales según especificaciones de
        crisis COVID-19, debidamente dotados y especializados
        para la atención de la Pandemia. </p>
        <p className={styles.important}> - Y lo hicimos en tan solo 17 días - </p>
      </div>
      <h2>Localización de Hospitales</h2>
      <CovidCarousel/>
      <div className={styles.section}>
        <h2>Construcción Hospital de Campaña junto al Hospital La Fe de Valencia</h2>
        <iframe title='hospital campaña' width="560" height="315" src="https://www.youtube.com/embed/25PdIOi8294" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <h2>Montaje Hospital de Campaña junto al Hospital La Fe en Valencia</h2>
        <iframe title='hospital montaje' width="560" height="315" src="https://www.youtube.com/embed/yJqj24wBB5A" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <h2>Hospital de Campaña junto al Hospital La Fe</h2>
        <iframe title='hospital junto a la fe 1' width="560" height="315" src="https://www.youtube.com/embed/cJy_Pp8dBH8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <h2>Hospital de Campaña junto al Hospital La Fe</h2>
        <iframe title='hospital junto a la fe 2' width="560" height="315" src="https://www.youtube.com/embed/7a_wllHV1lQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
    </Layout>
  )
}

export default CovidResponsePage

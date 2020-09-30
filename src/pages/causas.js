import React from 'react'
import styles from './pageStyles/causas.module.scss'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Objetivos from '../images/objetivos-header.jpg'
import Causas from '../images/causas-white.png'
import Catastrofes from '../images/Catastrofes.jpg'
import Migracion from '../images/migracion.jpg'
import MedioAmbiente from '../images/medio-ambiente.jpg'
import IgualdadGenero from '../images/igualdad-de-genero.jpg'
import Educacion from '../images/Educacion.jpg'
import TransporteEnergia from '../images/transporte-y-energia.jpg'
import SeguridadAlimentaria from '../images/seguridad-alimentaria.jpg'
import Saneamiento from '../images/Saneamiento.jpg'
import Salud from '../images/Salud.jpg'
import ProteccionDerechos from '../images/proteccion-de-derechos.jpg'
import Seguridad from '../images/planes-de-seguridad.jpg'
import Refugiados from '../images/crisis-de-refugiados.jpg'
const CausasPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className={styles.container}>
      <img src={Objetivos} alt="Objetivos"/>
      <div className={`${styles.section} ${styles.dark}`}>
        <img src={Causas} alt="Causas"/>
        <h2>NUESTRAS CAUSAS</h2>
        <p>Nuestro compromiso es propiciar el impulso de los Objetivos de Desarrollo Sostenible y la Agenda 2030 de Naciones Unidas. Respaldamos a las autoridades y/o responsables, en la prevención de deterioros mayores y posibles contingencias de carácter social: salvar vidas, mitigar situaciones de vulnerabilidad y pobreza extrema y aliviar el sufrimiento en comunidades con situaciones de crisis y Emergencia Social.</p>
      </div>
      <div className={styles.section}>
        <p>GRAES es una fuerza conjunta equipada para lidiar con Emergencias de todo tipo, especialmente en los sectores descritos a continuación:</p>
        <div className={styles.cardContainer}>
          <img src={Catastrofes} className={styles.posterImage} alt="Catastrofes"/>
          <h2>Emergencias y Catástrofes Naturales</h2>
          <p>Respaldamos y apoyamos en la preparación de autoridades y/o responsables, para la atención inmediata de Emergencias, Catástrofes Naturales, u otras Calamidades de fuerza mayor, contando con una rápida capacidad de despliegue, efectiva en menos de 24 horas, los 365 días del año.</p>
        </div>
        <div className={styles.cardContainer}>
          <img src={Migracion} className={styles.posterImage} alt="Migracion"/>
          <h2>Composición del <br/>Flujo Migratorio</h2>
          <p>Apoyamos la auditoría de la población de migrantes, para cuantificar según los segmentos de mayor vulnerabilidad (niños menores, mujeres embarazadas, enfermos críticos o contagiosos).</p>
        </div>
        <div className={styles.cardContainer}>
          <img src={Salud} className={styles.posterImage} alt="Salud"/>
          <h2>Salud</h2>
          <p>Contribuimos en acciones para prevenir, mitigar y controlar emergencias de salud, incluyendo epidemias y crisis sanitarias.</p>
        </div>
        <div className={styles.cardContainer}>
          <img src={SeguridadAlimentaria} className={styles.posterImage} alt="Seguridad alimentaria"/>
          <h2>Seguridad Alimentaria</h2>
          <p>Respaldamos y desarrollamos acciones orientadas al alivio de situaciones de severas carencias alimentarias. Impulsamos el desarrollo de medidas que fortalezcan la seguridad alimentaria de las poblaciones afectadas.</p>
        </div>
        <div className={styles.cardContainer}>
          <img src={Saneamiento} className={styles.posterImage} alt="Saneamiento"/>
          <h2>Saneamiento de Aguas</h2>
          <p>Propiciamos acciones para incrementar el acceso al agua potable a través de programas de saneamiento de aguas, cuyos lineamientos se adaptan a las características y necesidades de las poblaciones afectadas.</p>
        </div>
        <div className={styles.cardContainer}>
          <img src={IgualdadGenero} className={styles.posterImage} alt="Igualdad de Genero"/>
          <h2>Igualdad de Género</h2>
          <p>Facilitamos programas que estimulen prácticas de corrección y erradicación de la desigualdad de género, fortaleciendo el acceso a oportunidades educativas, atención médica, trabajos con remuneraciones decentes y acceso a la representación política.</p>
        </div>
        <div className={styles.cardContainer}>
          <img src={TransporteEnergia} className={styles.posterImage} alt="Transporte, Energia y Telecomunicaciones"/>
          <h2>Transporte, Energía y <br/>Telecomunicaciones</h2>
          <p>Respaldamos acciones para construir y cooperar en la dotación de infraestructuras de transporte, energía y comunicaciones, que integren comunidades aisladas, con las redes adyacentes de servicios y la vialidad nacional.</p>
        </div>
        <div className={styles.cardContainer}>
          <img src={Educacion} className={styles.posterImage} alt="Educacion"/>
          <h2>Educación</h2>
          <p>Activamos y asesoramos programas educativos, a fines de aumentar la accesibilidad y la calidad de la educación primaria y secundaria, de la mano de líderes de comunidades afectadas.</p>
        </div>
        <div className={styles.cardContainer}>
          <img src={MedioAmbiente} className={styles.posterImage} alt="Medio Ambiente"/>
          <h2>Medio Ambiente & <br/>Cambio Climático</h2>
          <p>Propiciamos acciones para la preservar el Medio Ambiente y atenuar daños causados por el Cambio Climático a comunidades vulnerables.</p>
        </div>
        <div className={styles.cardContainer}>
          <img src={Seguridad} className={styles.posterImage} alt="Seguridad"/>
          <h2>Planes de Seguridad Habitacional</h2>
          <p>Ofrecemos a las autoridades y/o responsables, alternativas para el suministro, la procura e implantación de soluciones habitacionales especialmente concebidas para zonas de emergencia y comunidades vulnerables.</p>
        </div>
        <div className={styles.cardContainer}>
          <img src={ProteccionDerechos} className={styles.posterImage} alt="Proteccion de Derechos"/>
          <h2>Protección de Derechos</h2>
          <p>Respaldamos a autoridades, responsables y/o representantes, en la protección y procura de una correcta tutela para los derechos de minorías y comunidades indígenas. </p>
        </div>
        <div className={styles.cardContainer}>
          <img src={Refugiados} className={styles.posterImage} alt="Refugiados"/>
          <h2>Crisis de Refugiados</h2>
          <p>Apoyamos a autoridades y/o responsables, en el diagnóstico y atención de crisis con refugiados y en otras situaciones de conflictos sociales fronterizos.</p>
        </div>
      </div>
    </div>
    </Layout>
  )
}

export default CausasPage

import React from 'react'
import styles from './pageStyles/servicios.module.scss'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Aliados from '../components/aliados'
import NuestrosServiciosBanner from '../images/nuestros-servicios-banner.jpg'
import NuestrosServicios from '../images/nuestros-servicios-red.png'
import FabricacionTech from '../images/tecnologias.png'
import DisenoProyectos from '../images/proyectos.png'
import Gerencia from '../images/gerencia.png'
import Compras from '../images/compras.png'
import Asesorias from '../images/asesorias.png'
import EstudiosSociales from '../images/estudios-sociales.png'

const ServiciosPage = () => {
  return (
    <Layout>
      <SEO title="Servicios" />
      <div className={styles.container}>
      <img src={NuestrosServiciosBanner} alt="Nuestros Servicios"/>
      <div className={styles.section}>
        <img src={NuestrosServicios} alt="Nuestros Servicios"/>
        <h2>NUESTROS SERVICIOS</h2>
        <p>GRAES se centra en la consultoría integral de desarrollo
        sostenible en Emergencias Sociales. Nos especializamos en
        la investigación, fabricación de tecnologías, ejecución de
        proyectos y formulación de propuestas relacionadas con
        afectaciones y riesgos en comunidades vulnerables. 
        </p>
        <p>El abordaje de proyectos abarca desde las fases tempranas
        de diagnóstico y prevención en contextos de Emergencias, a
        las etapas de contención temprana y respuesta para atender
        Crisis en desarrollo. Proporcionamos a nuestros clientes, los
        modelos y herramientas necesarias para la gestión de este
        tipo de proyectos en todas sus etapas.</p>

        <img src={FabricacionTech} alt="Tecnologias"/>
        <h2>Fabricación de Tecnologías</h2>
        <p>Diseñamos, desarrollamos y fabricamos tecnologías,
        destinadas a equipar las unidades operativas que actúan en
        situaciones de riesgo y emergencias. Fabricamos sistemas
        integrados, equipos e insumos destinados para la
        protección y abastecimiento de comunidades vulnerables. </p>
        
        <img src={DisenoProyectos} alt="Diseño de proyectos"/>
        <h2>Diseño De Proyectos</h2>
        <p>Somos responsables de la conceptualización y el diseño de
        proyectos sociales destinados al desarrollo sostenible y al
        control de Emergencias Sociales. Utilizamos herramientas
        cualitativas, la metodología de marco lógico y estudios
        estadísticos de naturaleza econométrica, priorizando las
        particularidades y necesidades del organismo contratante
        y de los usuarios finales.
        </p>
        
        <img src={Gerencia} alt="Gerencia"/>
        <h2>Ejecución y Gerencia de Proyectos</h2>
        <p>Nos encargamos de la ejecución integral de proyectos
        utilizando las metodologías de marco lógico y del
        sistema PMBOK (Project Management Body of
        Knowledge). Contamos con herramientas y tecnologías
        efectivas para la gestión de contingencias, control de
        costos, control del tiempo, elaboración de manuales,
        directrices y lineamientos a seguir, durante las distintas
        fases de ejecución del proyecto.
        </p>

        <img src={Compras} alt="Compras"/>
        <h2>Compras Y Abastecimiento</h2>
        <p>Ofrecemos servicios de asistencia y procura para el manejo
        de adquisiciones especializadas, gestión de proyectos
        sociales y servicios de IPC.
        </p>

        <img src={Asesorias} alt="Asesorias"/>
        <h2>Asesoría En Derecho Internacional</h2>
        <p>Asesoramos a organismos, instituciones públicas y privadas
        y ONGs en la preparación de manuales de asistencia para la
        elaboración de políticas públicas de desarrollo. Asistimos a
        personas y comunidades en casos de refugiados,
        desplazamientos internos, situaciones de conflicto y
        derecho comunitario.
        </p>

        <img src={EstudiosSociales} alt="Estudios Sociales"/>
        <h2>Estudios Sociales</h2>
        <ul>
            <li>Todas las comunidades en crisis enfrentan problemas que
            son propios a sus condiciones y características, a su
            localización geográfica, contexto económico y político, su
            historia e idiosincrasia cultural.</li>
            <li>Destinamos gran parte de nuestros recursos para el
            desarrollo de distintos estudios sociales, basados en
            metodologías estadísticas de naturaleza econométrica, así
            como estudios cualitativos en alianza con ONGs
            especializadas y líderes de comunidades afectadas. </li>
            <li>En base a las realidades y a información precisa sobre
            situaciones de emergencia, elaboramos soluciones efectivas
            y diseñamos políticas públicas, lineamientos y/o control del
            impacto de la implementación de proyectos sociales.</li>
        </ul>
      </div>
      <Aliados />
    </div>
    </Layout>
  )
}

export default ServiciosPage

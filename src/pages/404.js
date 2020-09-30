import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: no existente" />
    <h1>OOPS</h1>
    <p>Esa pagina no parece existir :(</p>
    <Link to ='/'>Volver al inicio</Link>
  </Layout>
)

export default NotFoundPage

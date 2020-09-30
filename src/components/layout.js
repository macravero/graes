import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Header from "./header"
import Footer from './footer'
import styles from './layout.module.scss'
import "../styles/index.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Header siteTitle={data.site.siteMetadata.title} />
        {children}
      </div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

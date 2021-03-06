import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import MobileNav from './mobile/mobileNavbar'
import DesktopNav from './desktopNav';
import Logo from '../images/logo-graes.png'
import LogoDesktop from '../images/logo-graes-desktop.png'

const Header = () => {
  return (
    <header
      style={{
        background: `white`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1600,
          padding: `1rem 2.0875rem`,
          position: 'relative',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Link to ='/'><img src={Logo} alt='Graes logo' className="mobileLogo" style={{maxWidth: '100px', margin: '0'}} /></Link>
        <Link to ='/'><img src={LogoDesktop} alt='Graes logo' className="desktopLogo" style={{maxWidth: '100%', margin: '0'}} /></Link>
        <DesktopNav />
        <MobileNav />
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import NavStyle from "../components/modules/navbar.module.css"

import "../assets/css/style.css"

import Logga from "../assets/images/svg/logga.svg"

const header = {
  display: "flex",
  alignItems: "center",
  height: "65px",
  width: "90%",
  maxWidth: "1600px",
  margin: "0 auto",
}

const Navbar = () => {
  let [currentPos, setCurrentPos] = useState(null)
  let [visible, setVisible] = useState(true)

  const [openMenu, setOpenMenu] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      let lastPosition = window.pageYOffset

      setVisible(currentPos > lastPosition || lastPosition < 50)
      setCurrentPos(lastPosition)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })

  const open = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <div
      style={{ background: "#F80F00" }}
      className={
        visible
          ? `${NavStyle.mainHeader} active`
          : `${NavStyle.mainHeader} hidden`
      }
    >
      <header>
        <div className={NavStyle.header}>
          <div className={NavStyle.headerNavLeft}>
            <Link to="/" className={NavStyle.headerText}>
              <Logga className={NavStyle.headerNavLogo} />
            </Link>
              <h1 className={NavStyle.headerNavText}>
                Urkraft <span>Gym</span>
                <span> |</span> <span>Svettas eller gå hem!</span>
              </h1>
          </div>
          <nav
            className={`cd-stretchy-nav ${openMenu ? "nav-is-visible" : ""}`}
          >
            <span onClick={open} role="button" tabIndex="0" className="cd-nav-trigger" href="#">
              <span aria-hidden="true"></span>
            </span>
            <ul>
              <li>
                <Link to="/" 
                  title="Senaste nytt"
                  className={NavStyle.mobileView} 
                  activeClassName={NavStyle.active}
                  >
                  <span className={NavStyle.link}>Hem</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/omoss"
                  activeClassName={NavStyle.active}
                  title="Om oss"
                >
                  <span className={NavStyle.link}>Om oss</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  activeClassName={NavStyle.active}
                  title="Blogg"
                >
                  <span className={NavStyle.link}>Blogg</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/kontakt"
                  activeClassName={NavStyle.active}
                  title="Kontakt"
                >
                  <span className={NavStyle.link}>Kontakt</span>
                </Link>
              </li>
            </ul>
            <span aria-hidden="true" className="stretchy-nav-bg"></span>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Navbar

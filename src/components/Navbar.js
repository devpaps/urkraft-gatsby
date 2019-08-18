import React, { useState } from "react"
import { Link } from "gatsby"

import NavStyle from "../components/modules/navbar.module.css"

import "../assets/css/style.css"
const header = {
  display: "flex",
  alignItems: "center",
  height: "100px",
  width: "90%",
  maxWidth: "1600px",
  margin: "0 auto",
}

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)

  const open = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <header style={{ background: "#F80F00" }}>
      <div style={header}>
        <Link to="/" className={NavStyle.headerText}>
          <h1 className={NavStyle.headerNavText}>
            Urkraft <span style={{ fontWeight: "300" }}>Gym</span>
            <span> |</span> <span>Svettas eller gå hem!</span>
          </h1>
        </Link>
        <nav className={`cd-stretchy-nav ${openMenu ? "nav-is-visible" : ""}`}>
          <span onClick={open} className="cd-nav-trigger" href="#">
            <span aria-hidden="true"></span>
          </span>
          <ul>
            <li>
              <Link to="/omoss">
                <span className={NavStyle.link}>Om oss</span>
              </Link>
            </li>
            <li>
              <Link to="/senastenytt">
                <span className={NavStyle.link}>Senaste Nytt</span>
              </Link>
            </li>
            <li>
              <Link to="/blog">
                <span className={NavStyle.link}>Blogg</span>
              </Link>
            </li>
            <li>
              <Link to="/kontakt">
                <span className={NavStyle.link}>Kontakt</span>
              </Link>
            </li>
          </ul>
          <span aria-hidden="true" className="stretchy-nav-bg"></span>
        </nav>
      </div>
    </header>
  )
}

export default Navbar

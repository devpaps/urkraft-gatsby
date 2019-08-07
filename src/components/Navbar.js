import React, { useState } from "react"
import { Link } from "gatsby"
import "../assets/css/style.css"

/* import { IoMdMegaphone } from "react-icons/io" */

import NavStyle from "../components/modules/navbar.module.css"

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
        <nav
          onClick={open}
          className={`cd-stretchy-nav ${openMenu ? "nav-is-visible" : ""}`}
        >
          <a className="cd-nav-trigger" href="#0">
            <span aria-hidden="true"></span>
          </a>
          <ul>
            <li>
              <Link to="/omoss">
                <span>Om oss</span>
              </Link>
            </li>
            <li>
              <Link to="/senastenytt">
                <span>Senaste Nytt</span>
              </Link>
            </li>
            <li>
              <Link to="/kontakt">
                <span>Kontakt</span>
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

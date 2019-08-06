import React, { useState } from "react"
import { Link } from "gatsby"
import "../assets/css/style.css"

const header = {
  display: "flex",
  alignItems: "center",
  height: "100px",
  margin: "0 auto",
  width: "90%",
}

const headerText = {
  fontSize: "22px",
  textTransform: "Uppercase",
  color: "#fff",
  letterSpacing: "2px",
  fontFamily: "Rubik",
  fontWeight: "700",
  marginRight: "auto",
  marginBottom: "0",
}

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)

  const open = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <header style={{ background: "#F80F00", width: "100%" }}>
      <div style={header}>
        <h1 style={headerText}>
          Urkraft <span style={{ fontWeight: "300" }}>Gym</span> |{" "}
          <span>Svettas eller gå hem!</span>
        </h1>
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
              <Link to="/kontakt">
                <span>Kontakt</span>
              </Link>
            </li>
            <li>
              <Link to="/senastenytt">
                <span>Senaste Nytt</span>
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

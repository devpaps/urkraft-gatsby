import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import NavStyle from "../components/modules/navbar.module.css"

import "../assets/css/style.css"

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
      console.log("currentPos " + currentPos, "lastPosition " + lastPosition)
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
        <div style={header}>
          <Link to="/" className={NavStyle.headerText}>
            <h1 className={NavStyle.headerNavText}>
              Urkraft <span style={{ fontWeight: "300" }}>Gym</span>
              <span> |</span> <span>Svettas eller gå hem!</span>
            </h1>
          </Link>
          <nav
            className={`cd-stretchy-nav ${openMenu ? "nav-is-visible" : ""}`}
          >
            <span onClick={open} className="cd-nav-trigger" href="#">
              <span aria-hidden="true"></span>
            </span>
            <ul>
              <li>
                <Link
                  to="/omoss"
                  activeStyle={{
                    paddingBottom: "1px",
                    borderBottom: "2px solid black",
                  }}
                  title="Om oss"
                >
                  <span className={NavStyle.link}>Om oss</span>
                </Link>
              </li>
              <li>
                <Link to="/senastenytt" title="Senaste nytt">
                  <span className={NavStyle.link}>Senaste Nytt</span>
                </Link>
              </li>
              <li>
                <Link to="/blog" title="Blogg">
                  <span className={NavStyle.link}>Blogg</span>
                </Link>
              </li>
              <li>
                <Link to="/kontakt" title="Kontakt">
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

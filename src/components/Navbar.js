import React from "react"
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
  return (
    <header style={{ background: "#F80F00", width: "100%" }}>
      <div style={header}>
        <h1 style={headerText}>
          Urkraft <span style={{ fontWeight: "300" }}>Gym</span> |{" "}
          <span>Svettas eller gå hem!</span>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="/omoss">Om oss</Link>
            </li>
            <li>
              <Link to="/kontakt">Kontakt</Link>
            </li>
            <li>
              <Link to="/senastenytt">Senaste Nytt</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar

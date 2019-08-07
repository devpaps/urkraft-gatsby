import React from "react"
import Navbar from "../components/Navbar"

import Styles from "../components/layout.module.css"

const Layout = props => (
  <section className={Styles.container}>
    <Navbar />
    {props.children}
  </section>
)

export default Layout

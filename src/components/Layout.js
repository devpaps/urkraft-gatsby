import React from "react"
import { Helmet } from "react-helmet"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import Styles from "../components/modules/layout.module.css"

const Layout = props => (
  <section className={Styles.container}>
    <Helmet>
      <title>Urkraft Gym</title>
      <meta
        name="description"
        content="Vi har tränat motionärer så som elitidrottare här. På Urkraft Gym kommer du finna en härlig mix av människor, gamla som unga som alla vill få ett bättre välbefinnande."
      />
      <link rel="canonical" href="https://urkraft.netlify.com/" />
    </Helmet>
    <Navbar />
    {props.children}
    <Footer />
  </section>
)

export default Layout

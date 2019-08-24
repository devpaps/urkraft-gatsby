import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout"

export default () => (
  <div>
    <Layout>
      <Helmet>
        <title>Urkraft Gym - Kontakta oss</title>
      </Helmet>
      <h1>About Gatsby</h1>
      <p>Such wow. Very React.</p>
      <Link to="/">Hem</Link>
    </Layout>
  </div>
)

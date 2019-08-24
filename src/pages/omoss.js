import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import Layout from "../components/Layout"

const Omoss = () => (
  <div style={{ color: `purple` }}>
    <Layout>
      <Helmet>
        <title>Urkraft Gym - Om oss</title>
      </Helmet>
      <h1>Urkraft i tiden</h1>
      <p>Such wow. Very React.</p>
      <Link to="/">Hem</Link>
    </Layout>
  </div>
)

export default Omoss

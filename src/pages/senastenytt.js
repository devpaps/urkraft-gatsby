import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout"

const SenasteNytt = props => (
  <Layout>
    <Helmet>
      <title>Urkraft Gym - Senaste nytt</title>
    </Helmet>
    <section className="container">
      <h1>Senaste nytt</h1>
    </section>
  </Layout>
)

export default SenasteNytt

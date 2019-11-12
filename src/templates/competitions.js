import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

import competitionStyle from "../components/modules/competitions.module.css"

const CompetitionsTemplate = props => {
  return (
    <Layout>
      <Helmet>
        <title>Urkraft Gym - Tävlingar</title>
      </Helmet>
      <section className={competitionStyle.wrapper}>
        <h1 className={competitionStyle.header}>
          {props.data.contentfulCompetition.title}
        </h1>
        <p>{props.data.contentfulCompetition.information}</p>
        <p>{props.data.contentfulCompetition.whereAndWhen}</p>
      </section>
      <div className="header"></div>
    </Layout>
  )
}

export const query = graphql`
  query CompetitionsTemplate($id: String!) {
    contentfulCompetition(id: { eq: $id }) {
      id
      information
      title
      whereAndWhen
    }
  }
`

export default CompetitionsTemplate

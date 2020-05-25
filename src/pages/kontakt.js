import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout"
import ContactStyle from "../components/modules/contact.module.css"
import { graphql } from "gatsby"
import Img from "gatsby-image"

export default () => (
  <div>
    <Layout>
      <Helmet>
        <title>Urkraft Gym - Kontakta oss</title>
      </Helmet>
      <section className={ContactStyle.container}>
        <h1 className={ContactStyle.headerText}>Kontakta oss</h1>
        <div className={ContactStyle.main}>
          <div className={ContactStyle.left}>
            <h1>Vanliga frågor</h1>
            <div className={ContactStyle.leftText}>
              <p>
                Du är viktig för oss! Vi på arbetar så fort vi kan på att svara
                på era frågor.
              </p>
              <div className={ContactStyle.corona}>
                <h2>Våra riktlinjer angående Covid-19</h2>
                <ul>
                  <li>Vi håller öppet som vanligt, 06-21 alla dagar.</li>
                  <li>Träna inte om du har symptom på förkylning/influensa</li>
                  <li>
                    Tvätta händerna noga efteråt. Torka av maskiner och handtag
                    med ytdesinfektionsmedel sedan du har tränat.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={ContactStyle.right}>
            <form
              name="contact"
              method="POST"
              netlify-honeypot="bot-field"
              data-netlify="true"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className={ContactStyle.contactForm}>
                <p className={ContactStyle.hidden}>
                  <label>
                    Don’t fill this out if you're human:{" "}
                    <input name="bot-field" />
                  </label>
                </p>
                <div className={ContactStyle.nameContainer}>
                  <div className={ContactStyle.firstName}>
                    <label className={ContactStyle.label} for="fornamn">
                      Förnamn
                    </label>
                    <input
                      type="text"
                      maxlength="255"
                      autocomplete="none"
                      id="fornamn"
                      name="Namn"
                      className=""
                      required
                      placeholder="Förnamn"
                    />
                  </div>
                  <div className={ContactStyle.lastName}>
                    <label className={ContactStyle.label} for="efternamn">
                      Efternamn
                    </label>
                    <input
                      type="text"
                      maxlength="255"
                      autocomplete="none"
                      id="efternamn"
                      name="Namn"
                      className=""
                      required
                      placeholder="Efternamn"
                    />
                  </div>
                </div>
                <label className={ContactStyle.label} for="email">
                  E-post
                </label>
                <input
                  type="email"
                  maxlength="255"
                  autocomplete="none"
                  id="email"
                  name="E-post"
                  className=""
                  placeholder="E-post"
                  required
                />

                <label className={ContactStyle.label} for="meddelande">
                  Ditt meddelande
                </label>
                <textarea
                  type="text"
                  id="meddelande"
                  className=""
                  name="Meddelande"
                  placeholder="Vad har du på hjärtat?"
                  required
                  rows="5"
                />

                <button type="submit" className={ContactStyle.whatWeDoButton}>
                  <div>Skicka</div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  </div>
)

export const mapQuery = graphql`
  query StaticMapQuery {
    staticMap {
      childFile {
        absolutePath
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  }
`

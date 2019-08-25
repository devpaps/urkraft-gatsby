import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout"
import ContactStyle from "../components/modules/contact.module.css"

export default () => (
  <div>
    <Layout>
      <Helmet>
        <title>Urkraft Gym - Kontakta oss</title>
      </Helmet>
      <section className={ContactStyle.container}>
        <form>
          <div className={ContactStyle.contactForm}>
            <label className={ContactStyle.label}>
              <span className={ContactStyle.span}>Ditt namn</span>
              <input type="name" className="" placeholder="Johan" />
            </label>
            <label className={ContactStyle.label}>
              <span className={ContactStyle.span}>Email</span>
              <input type="email" className="" placeholder="namn@gmail.com" />
            </label>
            <label className={ContactStyle.label}>
              <span className={ContactStyle.span}>Ditt namn</span>
              <textarea
                type="text"
                className=""
                placeholder="Ditt meddelande"
              />
            </label>
            <button type="submit">Skicka</button>
          </div>
        </form>
      </section>
    </Layout>
  </div>
)

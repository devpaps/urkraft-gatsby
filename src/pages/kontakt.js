import React from "react"
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
        <h1 className={ContactStyle.headerText}>Kontakta oss</h1>
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
                Don’t fill this out if you're human: <input name="bot-field" />
              </label>
            </p>
            <label className={ContactStyle.label}>
              <span className={ContactStyle.span}>Ditt namn</span>
              <input
                type="text"
                name="Namn"
                className=""
                required
                placeholder="Johan"
              />
            </label>
            <label className={ContactStyle.label}>
              <span className={ContactStyle.span}>Email</span>
              <input
                type="email"
                name="E-mail"
                className=""
                placeholder="namn@gmail.com"
                required
              />
            </label>
            <label className={ContactStyle.label}>
              <span className={ContactStyle.span}>Ditt namn</span>
              <textarea
                type="text"
                className=""
                name="Meddelande"
                placeholder="Ditt meddelande"
                required
                rows="4"
              />
            </label>
            <button type="submit" className={ContactStyle.whatWeDoButton}>
              Skicka
            </button>
          </div>
        </form>
      </section>
    </Layout>
  </div>
)

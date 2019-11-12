import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout"

import AboutStyle from "../components/modules/about.module.css"

const Omoss = () => (
  <>
    <Layout>
      <Helmet>
        <title>Urkraft Gym - Om oss</title>
      </Helmet>
      <div className={AboutStyle.main}>
        <h1 className={AboutStyle.header}>Om oss</h1>
        <p className={AboutStyle.information}>
          Tåsjödalens Idrottsklubb, TDIK, bildades 1 oktober 2010. Inriktningen
          är styrketräning, volleyboll/beachvolleyboll och bordtennis. Gymmet,
          Urkraft gym, finns i källaren i Kyrktåsjö skola. Volleyboll och
          bordtennis spelas i skolans gympasal och beachvolleyboll spelas på
          Invallningen i Tåsjö östra.
        </p>
        <p>
          TDIK är medlem i Svenska volleybollförbundet Svenska
          styrkelyftsförbundet och Svenska bordtennisförbundet.
        </p>
        <div className={AboutStyle.medlemsavgifter}>
          <h1>Medlemsavgifter 2019</h1>
          <ul>
            <li>
              <strong>Enskild:</strong> 50 kr för alla åldrar
            </li>
            <li>
              <strong>Familj:</strong> 100 kr (gäller för alla barn som till
              största delen är hemmaboende)
            </li>
          </ul>
        </div>
        <div className={AboutStyle.traningsavgifter}>
          <h1>Träningsavgifter 2019</h1>
          <h3>Årskort</h3>
          <ul>
            <li>0 - 15år 0kr</li>
            <li>15år - 300 kr</li>
            <li>Enskilda träningstillfällen 20 kr/st </li>
          </ul>
        </div>
        <div className={AboutStyle.medlem}>
          <h1>Vill du bli medlem?</h1>
          <p>
            Betala in medlems- samt träningsavgift på vårt bankgirokonto i
            <strong> Handelsbanken: 725-0558</strong> eller
            <strong> swisha till 1236178594 </strong>
            Nya medlemmar kontaktar Katarina Gahlin för att få aktuell kod till
            gymmet; 070-2216143
          </p>
        </div>
        <h1 style={{ marginBottom: "1rem" }}>Styrelsen</h1>
        <p>
          <strong>Ordförande:</strong> Tomas Jacobsson
        </p>
        <p>
          <strong>Ledamöter:</strong> Alexander Jacobsson
        </p>
        <p>
          <strong>Kassör:</strong> Katarina Gahlin
        </p>
        <p>
          <strong>Sekreterare:</strong> Pernilla Gunnarsdotter Persson
        </p>
        <p>
          <strong>Suppleanter:</strong> Lars Jönsson
        </p>
      </div>
    </Layout>
  </>
)

export default Omoss

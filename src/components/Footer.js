import React from "react"
import { Link } from "gatsby"
import { FaFacebook } from "react-icons/fa"
import FooterStyle from "../components/modules/footer.module.css"

const Footer = () => {
  return (
    <div className={FooterStyle.footer}>
      <div className={FooterStyle.container}>
        <div className={FooterStyle.widgets}>
          <div className={FooterStyle.left}>
            <Link to="/" className={FooterStyle.link}>
              <h2>Urkraft &copy; {new Date().getFullYear()}</h2>
            </Link>
            <div className={FooterStyle.footerBottom}>
              <h3>Öppettider</h3>
              <p>Alla dagar 06 - 21 </p>
            </div>
          </div>
          <div className={FooterStyle.center}>
            <h3>Länkar</h3>
            <Link to="/omoss" className={FooterStyle.link}>
              Om oss
            </Link>
            {/* <Link to="/senastenytt" className={FooterStyle.link}>
              Senaste nytt
            </Link> */}
            <Link to="/blog" className={FooterStyle.link}>
              Blogg
            </Link>
            <Link to="/kontakt" className={FooterStyle.link}>
              Kontakt
            </Link>
          </div>
          <div className={FooterStyle.right}>
            <a
              style={{ color: "#fff" }}
              href="https://www.facebook.com/TasjodalensIK/"
            >
              <FaFacebook className={FooterStyle.facebookIcon} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

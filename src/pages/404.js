import React from "react"
import { Link } from "gatsby"

import Custom404 from "../components/modules/custom404.module.css"

const PageNotFound = () => {
  return (
    <div className={Custom404.main}>
      <h1>Sida ej hittad</h1>
      <p>
        Gå tillbaka till{" "}
        <Link to="/" title="Tillbaka till startsidan">
          startsidan
        </Link>
        .
      </p>
    </div>
  )
}

export default PageNotFound

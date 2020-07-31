import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"

import { Button, Purchase } from "../styles/components"

const Gracias = () => (
  <>
    <SEO title="Compra Exitosa" />
    <Purchase>
      <h2>Compra Exitosa</h2>
      <p>Espero que disfrutes tu swag, lucelo con orgullo</p>
      <p>¡Te esperamos de vuelta, no pares de aprender!</p>
      <Link to="/">
        <Button>Regresa al catálogo</Button>
      </Link>
    </Purchase>
  </>
)

export default Gracias

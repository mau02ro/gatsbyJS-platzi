/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"

import "./layout.css"
import { Content, Footer } from "../styles/components"

const Layout = ({ children }) => (
  <>
    <Header />
    <div>
      <Content>{children}</Content>
      <Footer>Papu Papudirs</Footer>
    </div>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

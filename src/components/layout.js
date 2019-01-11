import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Footer from "./footer"
import Header from "./header"
import SEO from "./seo"

import "../css/site.scss"

const Layout = ({ pageTitle, isRoot, children }) => (
  <StaticQuery
    query={graphql`
      query SiteMetadataQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <>
        <SEO title={pageTitle || data.site.siteMetadata.title} />
        <Header siteTitle={data.site.siteMetadata.title} siteDescription={data.site.siteMetadata.description} isRoot={isRoot} />
        {children}
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  pageTitle: PropTypes.string,
  isRoot: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

Layout.defaultProps = {
  isRoot: false,
}

export default Layout

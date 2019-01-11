import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle, siteDescription, isRoot }) => (
  <header>
    {isRoot &&
      <h1>{siteTitle}</h1>
    }
    {!isRoot &&
      <Link to="/"><h1>{siteTitle}{"↩︎"}</h1></Link>
    }
    <p>{siteDescription}</p>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string,
  isRoot: PropTypes.bool,
}

Header.defaultProps = {
  siteTitle: ``,
  siteDescription: ``,
  isRoot: false,
}

export default Header

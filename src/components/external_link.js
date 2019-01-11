import PropTypes from "prop-types"
import React from "react"

const ExternalLink = ({ href, label, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">{label || children || href}</a>
)

ExternalLink.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string,
  children: PropTypes.node,
}

export default ExternalLink

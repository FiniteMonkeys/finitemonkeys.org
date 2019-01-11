import PropTypes from "prop-types"
import React from "react"

const Section = ({ children }) => (
  <section>
    {children}
  </section>
)

Section.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Section

import React from "react"
import PropTypes from "prop-types"
import { Link, StaticQuery, graphql } from "gatsby"

const ProjectList = ({ project }) => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}) {
          edges {
            node {
              id
              frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
                project
              }
            }
          }
        }
      }
    `}
    render={data => (
      <ul>
        {
          data.allMarkdownRemark.edges
            .filter(edge => edge.node.frontmatter.project == project)
            .map(edge => <li><Link to={edge.node.frontmatter.path}>{edge.node.frontmatter.title}</Link></li>)
        }
      </ul>
    )}
  />
)

ProjectList.propTypes = {
  project: PropTypes.string.isRequired
}

export default ProjectList

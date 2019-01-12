import React from "react"
import PropTypes from "prop-types"
import { Link, StaticQuery, graphql } from "gatsby"

const PostList = ({ category }) => (
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
                category
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
            .filter(edge => edge.node.frontmatter.category == category)
            .map(edge => <li><Link to={edge.node.frontmatter.path}>{edge.node.frontmatter.title}</Link></li>)
        }
      </ul>
    )}
  />
)

PostList.propTypes = {
  category: PropTypes.string.isRequired
}

export default PostList

import PropTypes from "prop-types"
import React from "react"

const Article = ({ articleTitle, centered, html, children }) => (
  <article>
    <header>
      <h2>{articleTitle}</h2>
    </header>
    { html !== undefined &&
      <div className="row justify-content-center">
        <div className={centered ? "col-auto" : "col-8"} dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    }
    { children !== undefined &&
      <div className="row justify-content-center">
        <div className={centered ? "col-auto" : "col-8"}>
          {children}
        </div>
      </div>
    }
  </article>
)

Article.propTypes = {
  articleTitle: PropTypes.string.isRequired,
  centered: PropTypes.bool,
  children: PropTypes.node,
  html: PropTypes.string,
}

Article.defaultProps = {
  centered: false,
}

export default Article

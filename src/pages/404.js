import React from "react"

import Article from "../components/article"
import Layout from "../components/layout"
import Section from "../components/section"
import ExternalLink from "../components/external_link"

// detect browser's (rough) geographic location?
//   change to "PC LOAD A4" as appropriate
// occasionally slip in "PC LOAD BANANA"

const NotFoundPage = () => (
  <Layout pageTitle="404 Not Found">
    <Section>
      <Article articleTitle="404: PC LOAD LETTER" centered={true}>
        <blockquote>
          From this session interdict<br/>
          Every fowl of tyrant wingg,<br/>
          &nbsp;ave the eaggle, feather'd kingg;<br/>
          Dam machine the g is sticked.
        </blockquote>
        <p>&mdash;<ExternalLink href="https://archive.org/stream/Fantastic_v20n02_1970-12#page/n85/mode/2up">R. A. Lafferty, "Been a Long, Long Time"</ExternalLink></p>
      </Article>
    </Section>
  </Layout>
)

export default NotFoundPage

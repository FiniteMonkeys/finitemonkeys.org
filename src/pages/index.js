import React from "react"
import { Link } from "gatsby"

import Article from "../components/article"
import ExternalLink from "../components/external_link"
import Layout from "../components/layout"
import PostList from "../components/post_list"
import Section from "../components/section"

export default () => (
  <Layout isRoot={true}>
    <Section>

      <Article articleTitle="projects" centered={true}>
        <ul className="toc">
          <li>
            kerbal space program
            <PostList category="kerbal space program" />
          </li>
          <li>
            hardware
            <PostList category="hardware" />
          </li>
          <li>
            iOS/macOS
            <PostList category="ios_macos" />
          </li>
          <li>
            elixir
            <PostList category="elixir" />
          </li>
        </ul>
      </Article>

      <Article articleTitle="about">
        <p>finitemonkeys.org is a collaborative project for developing software, and maybe generating other content as well.</p>
        <p>Two of our guiding principles are:</p>
        <ol>
          <li>Don't be afraid to fail.</li>
          <li>Show your work.</li>
        </ol>
        <p>As a result, there will be a number of stalled or abandoned projects. We'll keep them around, because there's at least as much to be learned from failure as there is from success.</p>
      </Article>

      <Article articleTitle="credits">
        <p>Watch this space for details.</p>
      </Article>

    </Section>
  </Layout>
)

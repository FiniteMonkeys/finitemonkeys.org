import React from "react"
import { Link } from "gatsby"

import Article from "../components/article"
import ExternalLink from "../components/external_link"
import Layout from "../components/layout"
import ProjectList from "../components/project_list"
import Section from "../components/section"

export default () => (
  <Layout isRoot={true}>
    <Section>

      <Article articleTitle="projects" centered={true}>
        <ul className="toc">
          <li>
            kerbal space program
            <ProjectList project="kerbal space program" />
          </li>
          <li>
            hardware
            <ProjectList project="hardware" />
          </li>
          <li>
            iOS/macOS
            <ProjectList project="ios_macos" />
          </li>
          <li>
            elixir
            <ProjectList project="elixir" />
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
        <p>Made possible in part by:</p>
        <ul>
          <li><a href="https://www.gatsbyjs.org/">Gatsby</a></li>
          <li><a href="https://fonts.google.com/">Google Fonts</a></li>
          <li><a href="https://aws-amplify.github.io/docs/">Amplify</a></li>
        </ul>
      </Article>

    </Section>
  </Layout>
)

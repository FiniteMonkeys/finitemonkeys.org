import React from "react"
import { Link } from "gatsby"

import Article from "../components/article"
import ExternalLink from "../components/external_link"
import Layout from "../components/layout"
import Section from "../components/section"

export default () => (
  <Layout isRoot={true}>
    <Section>

      <Article articleTitle="projects" centered={true}>
        <ul className="toc">
          <li>
            kerbal space program
            <ul>
              <li><Link to="jooce">jooce</Link></li>
              <li><Link to="ksptot_on_macos">KSP Trajectory Optimization Tool on macOS</Link></li>
            </ul>
          </li>
          <li>
            hardware
            <ul>
              <li><ExternalLink href="https://github.com/FiniteMonkeys/UpsideDownLEDs" label="upsidedownleds" /></li>
            </ul>
          </li>
          <li>
            iOS/macOS
            <ul>
              <li><ExternalLink href="https://github.com/FiniteMonkeys/Feedlot" label="Feedlot" /></li>
            </ul>
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

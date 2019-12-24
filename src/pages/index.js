import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

//components:
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Hero from "../components/hero"
import About from "../components/about"
import Skills from "../components/skills"
import Work from "../components/work"
import Contact from "../components/contact"

import data from "../data"

const IndexPage = () => {
  const { hero, about, skills, work, contact } = data

  return (
    <Layout>
      <Helmet>
        <title>Pep del Baño | Portfolio</title>
        <meta
          name="description"
          content="Passionate Full Stack Javascript Web Developer based in Barcelona"
        />
      </Helmet>

      <SEO title="Home" />
      <Hero data={hero} />
      <About data={about} />
      <Skills data={skills} />
      <Work data={work} />
      <Contact data={contact} />
    </Layout>
  )
}

export default IndexPage

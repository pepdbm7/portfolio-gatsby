import React from "react"
import { Helmet } from "react-helmet"

//components:
import SEO from "../components/seo"
import Layout from "../components/layout"
import NavBar from "../components/navbar"
import Hero from "../components/hero"
import About from "../components/about"
import Skills from "../components/skills"
import Work from "../components/work"
import Contact from "../components/contact"

import data from "../data"

const IndexPage = () => {
  const { navbar, hero, about, skills, work, contact } = data

  return (
    <Layout>
      <Helmet>
        <title>Pep del Baño | Portfolio</title>
        <meta
          name="description"
          content="Passionate Full Stack Javascript Web Developer based in Barcelona"
        />
      </Helmet>
      <SEO title="Pep portfolio" />

      <NavBar data={navbar} />
      <Hero data={hero} />
      <About data={about} />
      <Skills data={skills} />
      <Work data={work} />
      <Contact data={contact} />
    </Layout>
  )
}

export default IndexPage

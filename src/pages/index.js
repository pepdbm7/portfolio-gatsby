import React from "react"

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
      <SEO />

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

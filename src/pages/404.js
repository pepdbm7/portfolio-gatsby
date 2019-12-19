import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import styled from "styled-components"

//components:
import SEO from "../components/seo"

//images:
import abstract from "../images/abstract2.jpg"
import NavBar from "../components/navBar"

const Container = styled.div`
  position: absolute;
  margin: -8px;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: darkgrey;
  background-image: url(${abstract});
  background-size: cover;
  user-select: none;
`

const Title = styled.h1``

const GoHome = styled(Link)`
  text-decoration: none;
  border: 1px solid royalblue;
  background: white;
  color: royalblue;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  padding: 12px 30px;
  border-radius: 30px;
  user-select: none;
  outline: 0;
  width: fit-content;
  margin: 8px auto;

  transition: 0.25s all ease;

  &:hover {
    background: royalblue;
    color: white;
  }
`

const IndexPage = () => (
  <Container>
    <Helmet>
      <title>Pep del Baño | Portfolio</title>
      <meta
        name="description"
        content="Passionate Full Stack Javascript Web Developer based in Barcelona"
      />
    </Helmet>
    <SEO title="404" />
    <Title>Sorry, this page doesn't exist</Title>
    <GoHome to="/">Go Home</GoHome>
  </Container>
)

export default IndexPage

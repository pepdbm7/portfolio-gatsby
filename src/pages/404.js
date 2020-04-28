import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import variables from "../assets/styles/variables"

//components:
import SEO from "../components/seo"

const Container = styled.div`
  box-sizing: border-box;
  padding: 20px;
  margin: -8px;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${variables.secondary};
`

const Title = styled.h2`
  font-size: 50px;
  font-family: sans-serif;
  color: whitesmoke;
  text-align: center;
`

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
    <SEO title="404" />
    <Title>Sorry mate, this page doesn't exist...</Title>
    <GoHome to="/">Go Back</GoHome>
  </Container>
)

export default IndexPage

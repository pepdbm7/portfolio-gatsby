import styled from "styled-components"
import Image from "gatsby-image"

//Assets
import variables from "../../assets/styles/variables"
import devices, { breakpoints } from "../../assets/styles/breakpoints"

// spring:
import { animated as a } from "react-spring"

const Container = styled.section`
  color: white;
  font-family: ${variables.helvetica};
  background: ${variables.secondary};
  width: 100vw;
`

const Title = styled(a.h2)`
  text-align: center;
  width: 100%;
  margin: 100px auto 60px;
  z-index: 0;
  line-height: 39px;

  @media screen and (min-width: ${breakpoints.large}px) {
    margin: 100px auto 40px;
  }
`

const Intro = styled(a.p)`
  margin: 20px auto;
  width: 85%;
`

const ContactForm = styled(a.form)`
  margin: 60px auto 100px;

  input,
  textarea,
  button {
    padding: 15px 8px;
    margin: 8px 0;
    border: 1px solid royalblue;
    background: white;
    font-family: inherit;
  }
  @media screen and (min-width: ${breakpoints.tablet}px) {
    #name {
      margin: 8px 5px 8px 0;
    }
  }

  button {
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
  }
`

export { Container, Title, Intro, ContactForm }

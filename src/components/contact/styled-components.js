import styled from "styled-components"

//Assets
import variables from "../../assets/styles/variables"
import { breakpoints } from "../../assets/styles/breakpoints"

// spring:
import { animated as a } from "react-spring"

const Container = styled.section`
  color: white;
  font-family: ${variables.helvetica};
  background: ${variables.secondary};
  background: linear-gradient(
    to top,
    ${variables.secondary} 0%,
    ${variables.secondaryDark}
  );
  width: 100vw;
`

const Title = styled(a.h2)`
  text-align: center;
  width: 100%;
  margin: 100px auto 60px;
  z-index: 0;
  line-height: 39px;

  @media screen and (min-width: ${breakpoints.large}px) {
    margin: 170px auto 70px;
  }
`

const Intro = styled(a.p)`
  margin: 0 auto;
  width: 85%;
`

const ContactForm = styled(a.form)`
  margin: 80px auto 170px;

  input,
  textarea,
  button {
    padding: 15px 8px;
    margin: 20px 0;
    border: 1px solid royalblue;
    border-radius: 5px;
    background: white;
    font-family: inherit;
    background: transparent;
    color: white;
    font-size: 20px;
  }
  @media screen and (min-width: ${breakpoints.tablet}px) {
    #name {
      margin: 20px 5px 20px 0;
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
    cursor: pointer;
    outline: 0;
    width: fit-content;
    margin: 40px auto 10px;

    transition: 0.25s all ease;

    &:hover {
      background: royalblue;
      color: white;
    }
  }
`

export { Container, Title, Intro, ContactForm }

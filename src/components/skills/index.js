import React from "react"
import { useSpring, animated as a } from "react-spring"
import styled from "styled-components"

//Utils
import Wrapper from "../../utils/grid/wrapper"
import Row from "../../utils/grid/row"
import Column from "../../utils/grid/column"
import useIntersect from "../../utils/hooks/useIntersect"

//Assets
import variables from "../../assets/styles/variables"

//styles:
import { breakpoints } from "../../assets/styles/breakpoints"

//components:
import TechParallax from "./TechParallax"
import Wave from "../wave"

const Container = styled.section`
  background: white;
  position: relative;
  color: white;
  background: ${variables.secondary};
  padding: 0 0 100px;
  min-height: 150vh;
  z-index: 2;
`

const Title = styled(a.h2)`
  text-align: center;
  width: 100%;
  margin: 100px auto 60px;
  z-index: 0;
  line-height: 39px;

  @media screen and (min-width: ${breakpoints.large}px) {
    margin: 180px auto 80px;
  }
`

const Info = styled(a.div)`
  padding: 0 20%;
  z-index: 2;


  @media screen and (min-width: ${breakpoints.tablet}px) {
    p {
      max-width: 600px;
    }
`

const Background = styled.div`
  margin: 10vh auto;
  position: absolute;
  left: 50%;
  margin-left: -40vh;
  top: 50%;
  margin-top: -40vh;
  width: 80vh;
  height: 80vh;
  border-radius: 50%;

  background: ${variables.primary};
  background: radial-gradient(
    circle,
    ${variables.primaryDark} 0%,
    ${variables.primaryLight} 100%
  );
`

const Skills = ({ data: { id, title, description } }) => {
  const { format } = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 2,
  })

  const buildThresholdArray = () => Array.from(Array(100).keys(), i => i / 100)
  //useIntersect devuelve ref y entry. ref es la referencia del elemento del cual queremos controlar su visualización en el viewport
  //entry es el objeto con la información de la posición del elemento
  const [ref, entry] = useIntersect({
    //threshold es la cantidad de elemento visible para que se dispare el evento
    threshold: buildThresholdArray(),
  })

  const ratio = format(entry.intersectionRatio)

  const titleProps = useSpring({
    from: {
      opacity: 0,
      transform: `translate(0px, 100px)`,
    },
    to: {
      opacity: ratio > 0.1 ? 1 : 0,
      transform: ratio > 0.1 ? `translate(0px, 0px)` : `translate(0px, 100px)`,
    },
  })

  const infoProps = useSpring({
    from: {
      opacity: 0,
      transform: `translate(0px, 100px)`,
    },
    to: {
      opacity: ratio > 0.15 ? 1 : 0,
      transform: ratio > 0.15 ? `translate(0px, 0px)` : `translate(0px, 100px)`,
    },
  })

  return (
    <Container id={id} ref={ref}>
      <Background />
      <Wrapper>
        <Row>
          <Column xs={12}>
            <Title style={titleProps} className={"headingMedium"}>
              {title}
            </Title>
          </Column>
        </Row>
        <Row>
          <Column xs={12}>
            <Info style={infoProps}>{description}</Info>
          </Column>
        </Row>
        <Row>
          <Column xs={12}>
            <TechParallax />
          </Column>
        </Row>
      </Wrapper>
      <Wave />
    </Container>
  )
}

export default Skills

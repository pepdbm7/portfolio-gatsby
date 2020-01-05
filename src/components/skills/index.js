import React from "react"
import { useSpring, useTrail, animated as a } from "react-spring"
import styled from "styled-components"
import PropTypes from "prop-types"

//Utils
import Wrapper from "../../utils/grid/wrapper"
import Row from "../../utils/grid/row"
import Column from "../../utils/grid/column"
import useIntersect from "../../utils/hooks/useIntersect"

//Assets
import variables from "../../assets/styles/variables"

//images:
import TagIcon from "../../images/tag_icon.svg"

//styles:
import { breakpoints } from "../../assets/styles/breakpoints"

//components:
import TechParallax from "./TechParallax"
import Wave from "../wave"

const Container = styled.section`
  color: white;
  background: ${variables.secondary};
  position: relative;
  padding: 0 0 60px;
  min-height: 100vh;
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

const Info = styled(a.ul)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 15%;
  li {
    list-style: none;
    padding: 0 0 35px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      height: 90%;
    }
  }


  @media screen and (min-width: ${breakpoints.tablet}px) {
    p {
      max-width: 600px;
    }
`

const Skills = ({ data: { id, title, description } }) => {
  const { format } = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 2,
  })

  const buildThresholdArray = () => Array.from(Array(100).keys(), i => i / 100)
  const [ref, entry] = useIntersect({
    threshold: buildThresholdArray(),
  })

  const ratio = format(entry.intersectionRatio)

  const titleProps = useSpring({
    from: {
      opacity: 0,
      transform: `translate3d(0px, 50px, 0)`,
    },
    to: {
      opacity: ratio > 0.2 ? 1 : 0,
      transform:
        ratio > 0.2 ? `translate3d(0px, 0px, 0)` : `translate3d(0px, 50px, 0)`,
    },
    config: { duration: 1000 },
  })

  const descriptionTrail = useTrail(description.length, {
    from: {
      opacity: 0,
      transform: `scale(0.8)`,
    },
    to: {
      opacity: ratio > 0.2 ? 1 : 0,
      transform: ratio > 0.2 ? `scale(1)` : `scale(0.8)`,
    },
    config: { duration: 1500 },
  })

  return (
    <Container id={id} ref={ref}>
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
            <Info>
              {description &&
                descriptionTrail.map((props, index) => (
                  <a.li style={props} key={index}>
                    <img src={TagIcon} alt="tag icon" /> {description[index]}{" "}
                    <img src={TagIcon} alt="tag icon" />
                  </a.li>
                ))}
            </Info>
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

Skills.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Skills

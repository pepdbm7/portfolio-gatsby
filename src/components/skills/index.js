import React, { useEffect, useRef } from "react"
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
import TechIcons from "./TechIcons"
import Wave from "../wave"

const Container = styled.section`
  color: white;
  background: ${variables.secondary};
  position: relative;
  overflow: hidden;
  padding: 0 0 60px;
  min-height: 100vh;
  z-index: 2;
  transition: 0.4s all ease;
  box-shadow: ${variables.shadowLight};
`

const Circle = styled(a.div)`
  position: absolute;
  left: -200vw;
  top: -200vh;
  opacity: 0.5;
  width: 400vw;
  height:400vh;
  background-color: transparent;
background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234169e1' fill-opacity='0.4'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
transition: 0.4s all ease;
}


`

const Title = styled(a.h2)`
  text-align: center;
  width: fit-content;
  margin: 100px auto 60px;
  z-index: 0;
  line-height: 39px;
}

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
    padding: 0 0 20px;
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
  const [containerRef, entry] = useIntersect({
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

  //Parallax effects:
  const ref = useRef()
  const [{ offset }, setOffset] = useSpring(() => ({ offset: 0 }))

  const parallaxShift = () => {
    const posY = ref && ref.current && ref.current.getBoundingClientRect().top
    const offset = window.pageYOffset - posY
    setOffset({ offset })
    console.log({ offset })
  }

  useEffect(() => {
    let observer = new IntersectionObserver(entries => {
      let [{ isIntersecting }] = entries
      if (isIntersecting) {
        window.addEventListener("scroll", parallaxShift)
      } else {
        window.removeEventListener("scroll", parallaxShift)
      }
    })
    observer.observe(ref.current)
  })

  const transitionBall = offset.interpolate(
    o => `translate3d(0, ${o / 10}px, 0)`
  )

  return (
    <Container id={id} ref={ref}>
      <div ref={containerRef}>
        <Circle style={{ transform: transitionBall }} />
        <Wrapper>
          <Row>
            <Column xs={12}>
              <Title
                data-text={title}
                style={titleProps}
                className={"headingMedium"}
              >
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
              <TechIcons />
            </Column>
          </Row>
        </Wrapper>
        <Wave />
      </div>
    </Container>
  )
}

Skills.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Skills

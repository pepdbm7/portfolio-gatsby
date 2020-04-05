import React, { useEffect, useRef } from "react"
import PropTypes from "prop-types"

//Utils
import Wrapper from "../../utils/grid/wrapper"
import Row from "../../utils/grid/row"
import Column from "../../utils/grid/column"
import useIntersect from "../../utils/hooks/useIntersect"

import { Container, Circle, Title, Info } from "./styled-components"

import { useSpring, useTrail, animated as a } from "react-spring"

//images:
import TagIcon from "../../images/tag_icon.svg"

//components:
import TechIcons from "./TechIcons"
import Wave from "../wave"

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
              <Info className="bodyNormal">
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

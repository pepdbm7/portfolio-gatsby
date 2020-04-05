import React, { useEffect, useState, useRef } from "react"
import { useSpring, useTrail, animated as a } from "react-spring"
import {
  Section,
  Container,
  Title,
  Content,
  Description,
} from "./styled-components"
import PropTypes from "prop-types"

//Utils
import Wrapper from "../../utils/grid/wrapper"
import Row from "../../utils/grid/row"
import Column from "../../utils/grid/column"
import useIntersect from "../../utils/hooks/useIntersect"
import useWindowSize from "../../utils/hooks/useWindowSize"

//components:
import Social from "./Social"

const About = ({ data: { id, title, description, social } }) => {
  const ref = useRef()
  const widthWindow = useWindowSize()
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(widthWindow.width)
  }, [widthWindow])

  //Usesprings for content animations:
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
      transform: `translate3d(0, 50px,0)`,
    },
    to: {
      opacity: ratio > 0.15 ? 1 : 0,
      transform:
        ratio > 0.15 ? `translate3d(0, 0,0)` : `translate3d(0, 50px,0)`,
    },
    config: { duration: 1000 },
  })

  const descriptionTrail = useTrail(description.length, {
    from: { opacity: 0, transform: `scale(0.8)` },
    to: {
      opacity: ratio > 0.35 ? 1 : 0,
      transform: ratio > 0.35 ? `scale(1)` : `scale(0.8)`,
    },
    config: { duration: 1000 },
  })

  //Parallax effects:
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

  // const sectionOpacity = offset.interpolate(o =>
  //   width > 750 ? `${1.5 - o / 3500}` : `${1.6 - o / 3500}`
  // )
  const transitionContainer = offset.interpolate(o => {
    if (width < 750) return `translate3d(0, ${o / 20}px, 0)`
    if (width > 750 && width < 1025) return `translate3d(0, ${o / 6}px, 0)`
    if (width > 1023) return `translate3d(0, ${o / 4}px, 0)`
  })

  return (
    <Section
      ref={ref}
      id={id}
      style={
        {
          // opacity: sectionOpacity,
        }
      }
    >
      <Container
        ref={containerRef}
        style={{
          transform: transitionContainer,
        }}
      >
        <Title
          style={titleProps}
          className={"headingMedium"}
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <Wrapper>
          <Row>
            <Column xs={12}>
              <Content>
                <Description>
                  {description &&
                    descriptionTrail.map((props, i) => (
                      <a.p
                        key={i}
                        style={props}
                        className={"bodyNormal"}
                        dangerouslySetInnerHTML={{
                          __html: description[i],
                        }}
                      />
                    ))}
                </Description>

                <Social social={social} />

                {/* <DownloadButtonContainer
                  style={buttonProps}
                  href={"#"}
                  target="_blank"
                  download="cv"
                  rel="noopener noreferrer"
                >
                  <LeftButton>{button}</LeftButton>
                  <DonwloadIconBox>
                    <img src={downloadIcon} alt="download icon" />
                  </DonwloadIconBox>
                </DownloadButtonContainer> */}
              </Content>
            </Column>
          </Row>
        </Wrapper>
      </Container>
    </Section>
  )
}

About.propTypes = {
  data: PropTypes.object.isRequired,
}

export default About

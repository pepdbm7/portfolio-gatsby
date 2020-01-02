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

//styles:
import { breakpoints } from "../../assets/styles/breakpoints"

//components:
import Social from "./Social"

const Section = styled(a.section)`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 250vh;
  z-index: 1;
  background: deepskyblue;
  background: linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%);
`

const Container = styled(a.div)`
  background: tomato;
  background: linear-gradient(
    to right,
    tomato 0%,
    ${variables.primaryDark} 100%
  );

  position: absolute;
  width: 100%;
  min-height: 100vh;
  height: fit-content;
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  padding: 100px 0;
  color: white;
  z-index: 3;
`

const Title = styled(a.h2)`
  margin: 35px auto 100px;
  line-height: 39px;
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 20vh;
  z-index: 1000;
`

const Description = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20%;
  margin: @media screen and (min-width: ${breakpoints.tablet}px) {
    p {
      max-width: 600px;
    }
  }
`

const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 65px auto 40px;

  img {
    width: 2em;
    height: 2em;
    margin: 0 10px;
  }

  @media screen and (min-width: ${breakpoints.tablet}px) {
    margin: 100px auto;
    a {
      &:hover {
        transform: translate3d(0, -5px, 0);
        color: #ff0000;
      }
    }
  }
`

// const DownloadButtonContainer = styled(a.a)`
//   display: flex;
//   flex-wrap: nowrap;
//   justify-content: center;
//   opacity: 1;
//   background: ${variables.primary};
//   color: white;
//   margin: 40px auto 40px;
//   border-radius: 30px;
//   cursor: pointer;
//   text-decoration: none;

//   transition: 0.25s all ease;
//   box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);

//   @media screen and (min-width: ${breakpoints.tablet}px) {
//     margin: 0 auto 100px ;
//     margin:
//     line-height: 24px;
//   }
// `

// const LeftButton = styled.div`
//   height: inherit;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   text-align: center;
//   font-weight: bold;

//   padding: 16px 20px;
// `

// const DonwloadIconBox = styled.div`
//   border-left: 1px solid whitesmoke;
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   padding: 20px;
// `

const About = ({ data: { id, title, description, social } }) => {
  const ref = useRef()

  //Usesprings for content animations:
  const { format } = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 2,
  })

  const buildThresholdArray = () => Array.from(Array(100).keys(), i => i / 100)
  //useIntersect devuelve ref y entry. ref es la referencia del elemento del cual queremos controlar su visualización en el viewport
  //entry es el objeto con la información de la posición del elemento
  const [containerRef, entry] = useIntersect({
    //threshold es la cantidad de elemento visible para que se dispare el evento
    threshold: buildThresholdArray(),
  })

  const ratio = format(entry.intersectionRatio)

  const titleProps = useSpring({
    from: {
      opacity: 0,
      transform: `translate3d(0, 100px,0)`,
    },
    to: {
      opacity: ratio > 0.3 ? 1 : 0,
      transform:
        ratio > 0.3 ? `translate3d(0, 0,0)` : `translate3d(0, 100px,0)`,
    },
  })

  const descriptionTrail = useTrail(description.length, {
    from: { opacity: 0, transform: `scale(0.6)` },
    to: {
      opacity: ratio > 0.5 ? 1 : 0,
      transform: ratio > 0.5 ? `scale(1)` : `scale(0.6)`,
    },
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

  const sectionOpacity = offset.interpolate(o => `${2 - o / 3000}`)
  const transitionContainer = offset.interpolate(o => `translateY(${o / 9}px)`)

  return (
    <Section
      ref={ref}
      id={id}
      style={{
        opacity: sectionOpacity,
      }}
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

                <SocialContainer>
                  <Social social={social} ratio={ratio} />
                </SocialContainer>

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

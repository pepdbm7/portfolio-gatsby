import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { useSpring, animated as a } from "react-spring"
import { Parallax } from "react-parallax"
import useIntersect from "../../utils/useIntersect"

//utils:
import useWindowSize from "../../utils/useWindowSize"

//assets
import { breakpoints } from "../../assets/styles/breakpoints"
import variables from "../../assets/styles/variables"

//images:
import arrowDown from "../../images/arrow_down.svg"
import backgroundBlue from "../../images/bluesmoke.jpg"
import gatsbyicon from "../../assets/technologies/gatsby-icon.png"
import graphql from "../../assets/technologies/graphql.png"

//components:
// import HeroParallax from "./HeroParallax"

const HomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 100vh;
  width: 100%;
  position: relative;
`

const HomeBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;

  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 1;
    height: 100vh;
    width: 100vw;

    background-color: royalblue;
    background: url(${backgroundBlue});
    // opacity: 0.6;
  }

  @media screen and (min-width: ${breakpoints.large}px) {
    position: relative;

    &:before {
      // opacity: 0.5;
    }
  }

  img {
    object-fit: cover;
    min-width: 100%;
    min-height: 102%;
  }
`

const HeroContent = styled.div`
  width: 100%;
  height: 100%;
  user-select: none;
  user-drag: none;
  position: relative;
  color: white;
`

const HomeHeader = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 40px auto;
  position: relative;
  z-index: 10;

  @media screen and (min-width: ${breakpoints.large}px) {
    height: initial;
  }
`

const HomeTitle = styled(a.h1)`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  top: 160px;
  font-size: 57px;
  text-align: center;
  letter-spacing: -1.02px;
  line-height: 64px;
  margin: 0 auto 20px;

  span {
    font-weight: normal;
  }

  @media screen and (min-width: ${breakpoints.large}px) {
    font-size: 69px;
    text-align: center;
    letter-spacing: -0.58px;
    line-height: 78px;
    font-weight: bold;
  }
`

const Stripe = styled(a.div)`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  top: 250px;
  height: 2px;
  width: 30rem;
  background: linear-gradient(to right, tomato 0%, gold 100%);
`

const HomeSubtitle = styled(a.h2)`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  top: 280px;
  font-size: 23px;
  text-align: center;
  letter-spacing: 0px;
  line-height: 29px;
  margin: 0 auto;
  @media screen and (min-width: ${breakpoints.large}px) {
    font-size: 33px;
    text-align: center;
    letter-spacing: 0px;
    line-height: 39px;
    max-width: 60%;
    margin-top: 20px;
  }
`

const ImageLeft = styled.img`
  left: 7vw;
  position: absolute;
  width: 100px;
`
const ImageRight = styled.img`
  right: 5vw;
  position: absolute;
  width: 200px;
`

const HeroLinkDown = styled.a`
  color: white;
  text-decoration: none;
  position: absolute;
  bottom: 10px;
  display: block;
  padding-bottom: 40px;
  z-index: 100;
  cursor: pointer;

  ::after {
    content: "";
    position: absolute;
    width: 15px;
    height: 10px;
    background-repeat: no-repeat;
    background-image: url(${arrowDown});
    animation: flip-flop 0.8s infinite;
  }

  @keyframes flip-flop {
    0% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(0, 10px);
    }
  }

  transition: all 0.4s ease;
  opacity: 1;

  :hover {
    opacity: 0.6;
  }
`

const ScrollContainer = styled(a.div)`
  @media screen and (min-width: ${breakpoints.large}px) {
    height: 200vh;
    margin-bottom: 1px;
  }
`
const Fixed = styled(a.div)`
  position: fixed;
  z-index: -1;
  @media screen and (min-width: ${breakpoints.large}px) {
    width: 100%;
    top: 0;
  }
`

const Hero = ({ data: { title1, title2, subtitle, link, linkText } }) => {
  const widthWindow = useWindowSize()

  const [width, setWidth] = useState(null)
  const [offset, setOffset] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  const parallaxShift = () => setOffset(window.pageYOffset)

  const buildThresholdArray = () => Array.from(Array(100).keys(), i => i / 100)
  //useIntersect devulve ref y entry. ref es la referencia del elemento del cual queremos controlar su visualización en el viewport
  //entry es el objeto con la información de la posición del elemento
  const [ref, entry] = useIntersect({
    threshold: buildThresholdArray(),
  })

  //convert intersectionRatio in two decimals
  const ratio = (Math.round(entry.intersectionRatio * 100) / 100) * 2
  console.log({ ratio })
  console.log({ offset })
  console.log(ref.current)

  const { o } = useSpring({
    from: { o: 0 },
    o: ratio,
  })

  useEffect(() => {
    setWidth(widthWindow.width)
  }, [widthWindow])

  useEffect(() => {
    !ratio ? setIsVisible(false) : setIsVisible(true)
  }, [ratio])

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        parallaxShift()
      })
    }
    return () => window.removeEventListener("scroll", parallaxShift)
  }, [])

  return width >= breakpoints.large ? (
    <ScrollContainer
      ref={ref}
      id={"hero"}
      style={{
        visibility: o.interpolate(o => (o === 0 ? "hidden" : "visible")),
        opacity: o.interpolate([1, 0], [1, 0]),
      }}
    >
      <HeroContent>
        <HomeTitle style={{ top: isVisible && 240 + offset / 0.95 }}>
          {title1} <span>{title2}</span>
        </HomeTitle>
        <Stripe style={{ top: isVisible && 365 + offset / 0.93 }} />
        <HomeSubtitle style={{ top: isVisible && 385 + offset / 0.88 }}>
          {subtitle}
        </HomeSubtitle>
        <ImageLeft
          src={graphql}
          style={{ bottom: isVisible && `${50 + offset / 95}vh` }}
        />
        <ImageRight
          src={gatsbyicon}
          style={{ bottom: isVisible && `${-5 + offset / 230}vh` }}
        />
      </HeroContent>
      <Fixed>
        <HomeContainer>
          <HomeBackground style={{ backgroundPositionY: offset * 5 }} />
          <HeroLinkDown href={link}>{/*linkText*/}</HeroLinkDown>
        </HomeContainer>
      </Fixed>
    </ScrollContainer>
  ) : (
    <ScrollContainer id={"home"}>
      <HomeContainer>
        <HomeBackground />
        <HeroContent>
          <HomeHeader>
            <HomeTitle>
              {title1} <span>{title2}</span>
            </HomeTitle>
            <HomeSubtitle>{subtitle}</HomeSubtitle>
            {/*<HeroParallax />*/}
          </HomeHeader>
        </HeroContent>

        <HeroLinkDown href={link}>{linkText}</HeroLinkDown>
      </HomeContainer>
    </ScrollContainer>
  )
}

export default Hero

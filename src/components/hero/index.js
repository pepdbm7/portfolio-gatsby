import React, { useState, useEffect, useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled, { keyframes } from "styled-components"
import { useSpring, useTrail, animated as a } from "react-spring"
import useIntersect from "../../utils/hooks/useIntersect"

//utils:
import useWindowSize from "../../utils/hooks/useWindowSize"

//assets
import { breakpoints } from "../../assets/styles/breakpoints"
import variables from "../../assets/styles/variables"

//images:
import arrowDown from "../../images/arrow_down.svg"
// import backgroundBlue from "../../images/bluesmoke.jpg"
// import gatsbyicon from "../../assets/technologies/gatsby-icon.png"
// import graphql from "../../assets/technologies/graphql.png"

const HeroContainer = styled(a.header)`
  overflow: hidden;
  background: #dfdf;
  position: relative;
  width: 100vw;
  height: 200vh;
  color: white;

  user-select: none;
  user-drag: none;
`

const LeftSide = styled(a.div)`
  background: ${variables.secondary};
  position: absolute;

  width: 100vw;
  height: 120vh;
  top: -10vw;
  z-index: 9;
`

const ContentLeft = styled(a.div)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 1s all ease;

  ${({ offset }) => offset.interpolate(o => `width: (${50 + o * 0.1}%`)};
`

const HomeTitle = styled(a.h1)`
  font-size: 57px;
  text-align: center;
  letter-spacing: -1.02px;
  line-height: 64px;
  margin: 0 auto 20px;

  @media screen and (min-width: ${breakpoints.large}px) {
    font-size: 69px;
    text-align: center;
    letter-spacing: -0.58px;
    line-height: 78px;
    font-weight: bold;
  }
`

const rubberBandKeyFrame = keyframes`
0% {
  transform: scale(1);
}
30% {
  color: gold;
  transform: scaleX(1.5) scaleY(0.75);
}
40% {
  color: white;
  transform: scaleX(0.75) scaleY(1.5);
}
60% {
  color: tomato;

  transform: scaleX(1.15) scaleY(0.85);
}
100% {
  transform: scale(1);
}
`

const TitleLetter = styled(a.span)`
  color: white;
  animation-duration: 2.5s;
  animation-fill-mode: both;
  animation-iteration-count: infinite;

  &:hover {
    animation: ${rubberBandKeyFrame} 2s ease-in-out;
  }
`

const Stripe = styled(a.div)`
  height: 2px;
  background: linear-gradient(to right, tomato 0%, gold 100%);
`

const HomeSubtitle = styled(a.h2)`
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

const RightSide = styled(a.div)`
  background: red;
  position: absolute;
  left: 50%;
  width: 50vw;
  height: 120vh;
  top: -10vw;
  z-index: 10;
`

const HomeHeader = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 40px auto;
  color: white;
  position: relative;
  z-index: 10;

  @media screen and (min-width: ${breakpoints.large}px) {
    height: initial;
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
    left: 36px;
    bottom: 20px;
    background-repeat: no-repeat;
    background-image: url(${arrowDown});
    animation: flip-flop 1s infinite;
  }

  @keyframes flip-flop {
    0% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(0, 15px);
    }
  }

  transition: all 0.4s ease;
  opacity: 1;

  :hover {
    opacity: 0.6;
  }
`

const Hero = ({ data: { title1, title2, subtitle, link, linkText } }) => {
  const { bgImg } = useStaticQuery(graphql`
    query {
      bgImg: file(absolutePath: { regex: "/bluesmoke.jpg/" }) {
        id
        name
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const widthWindow = useWindowSize()
  useEffect(() => {
    setWidth(widthWindow.width)
  }, [widthWindow])

  const [width, setWidth] = useState(null)

  const ref = useRef()

  //Parallax effects:
  const [{ offset }, set] = useSpring(() => ({ offset: 0 }))

  const parallaxShift = () => {
    const posY = ref && ref.current & ref.current.getBoundingClientRect().top
    const offset = window.pageYOffset - posY
    set({ offset })
    console.log(offset)
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        parallaxShift()
      })
    }
    return () => window.removeEventListener("scroll", parallaxShift)
  }, [])

  const transitionLeft = offset.interpolate(o => `translateY(${o * 0.4}px)`)
  const transitionRight = offset.interpolate(
    o => `translate(${o}px, ${o * 0.4}px)`
  )
  const sectionOpacity = offset.interpolate(o => `${1 - o / 3000}`)

  return (
    <HeroContainer
      ref={ref}
      id={"hero"}
      style={{
        opacity: sectionOpacity,
      }}
    >
      <LeftSide
        style={{
          transform: transitionLeft,
        }}
      >
        <ContentLeft offset={offset}>
          <HomeTitle style={{}}>
            {title1} <span>{title2}</span>
          </HomeTitle>
          <Stripe
            style={{
              width: `100%`,
            }}
          />
          <HomeSubtitle style={{}}>{subtitle}</HomeSubtitle>
        </ContentLeft>
      </LeftSide>
      <RightSide
        style={{
          transform: transitionRight,
        }}
      ></RightSide>
      {/* ): (
    <ScrollContainer id={"home"}>
       <HomeContainer>
        <HomeBackground
          fluid={bgImg.childImageSharp.fluid}
          sizes="(width: 100vw)"
          alt={bgImg.name}
        />
        <HeroContent>
          <HomeHeader>
            <HomeTitle>
              {title1} <span>{title2}</span>
            </HomeTitle>
            <HomeSubtitle>{subtitle}</HomeSubtitle>
          </HomeHeader>
        </HeroContent>

        <HeroLinkDown href={link}>{linkText}</HeroLinkDown>
      </HomeContainer> 
    </ScrollContainer>*/}
    </HeroContainer>
  )
}

export default Hero

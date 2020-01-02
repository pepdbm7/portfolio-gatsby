import React, { useState, useEffect, useRef, useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import { useSpring, animated as a } from "react-spring"
import PropTypes from "prop-types"

//utils:
import useWindowSize from "../../utils/hooks/useWindowSize"

//assets
import { breakpoints } from "../../assets/styles/breakpoints"
import variables from "../../assets/styles/variables"

import { StoreContext } from "../store"

const HeroContainer = styled(a.header)`
  overflow: hidden;
  // background: linear-gradient(
    to top,
    ${variables.primary} 0%,
    ${variables.primaryDark} 100%
  );
  background: ${variables.secondary};
  color: white;
  position: relative;
  width: 100vw;
  height: 250vh;

  user-select: none;
  user-drag: none;
`

const RightSide = styled(a.div)`
  background: linear-gradient(to left, tomato 0%, gold 100%);
  position: relative;
  // left: 50%;
  width: 100vw;
  height: 120vh;
  top: -10vw;
  z-index: 10;

  img {
    right: 50%;
    top: 50%;
  }
`
const PictureContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate3d(0, -50%, 0);
  width: 50%;
`

const Picture = styled(Image)`
  border-radius: 50%;
  margin: auto 10%;
`

const LeftSide = styled(a.div)`
  background: ${variables.secondary};
  border: 1px solid black;
  position: absolute;
  left: 0;
  top: 0;
  min-width: 50vw;
  height: 120vh;
`

const ContentLeft = styled(a.div)`
  height: 100%;
  width: fit-content;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.4s all ease;
`

const HomeTitle = styled.h1`
  font-size: 57px;
  text-align: center;
  letter-spacing: -1.02px;
  line-height: 64px;
  margin: 0 auto 20px;
  transition: 0.4s all ease;

  @media screen and (min-width: ${breakpoints.large}px) {
    font-size: 69px;

    text-align: center;
    letter-spacing: -0.58px;
    line-height: 78px;
    font-weight: bold;
  }
`

const Stripe = styled(a.div)`
  height: 2px;
  width: 100%;
  background: linear-gradient(to right, tomato 0%, gold 100%);
  transition: 0.6s all ease;
`

const HomeSubtitle = styled.h2`
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
  color: gold;
  background: linear-gradient(gold 35%, transparent 90%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  :before {
    content: "";
  }
`

const Hero = ({ data: { title1, title2, subtitle } }) => {
  const { avatar } = useStaticQuery(graphql`
    query {
      avatar: file(absolutePath: { regex: "/profile.jpg/" }) {
        childImageSharp {
          fluid(maxWidth: 400, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const ref = useRef()
  const [, setWidth] = useState(0)
  const {
    isTop: [, setIsTop],
  } = useContext(StoreContext)

  const widthWindow = useWindowSize()

  useEffect(() => {
    setWidth(widthWindow.width)
  }, [widthWindow])

  //Parallax effects:
  const [{ offset }, set] = useSpring(() => ({ offset: 0 }))

  const parallaxShift = () => {
    const posY = ref.current.getBoundingClientRect().top
    const offset = window.pageYOffset - posY
    set({ offset })
    setIsTop(posY === 0)
  }

  useEffect(() => {
    let observer = new IntersectionObserver(entries => {
      let [{ isIntersecting }] = entries
      if (isIntersecting) {
        window.addEventListener("scroll", parallaxShift, {
          capture: false,
          passive: true,
        })
      } else {
        window.removeEventListener("scroll", parallaxShift, {
          capture: false,
          passive: true,
        })
      }
    })
    observer.observe(ref.current)
  })

  const sectionOpacity = offset.interpolate(o => `${1 - o / 7000}`)

  const transitionRight = offset.interpolate(
    o => `translate3d(0, ${o / 1.8}px, 0)`
  )

  const transitionImage = offset.interpolate(o => `translateY(${o * 4}px)`)

  const leftWidth = offset.interpolate(o => `${100 - o / 4}vw`)

  const contentScale = offset.interpolate(o =>
    o < 100 ? `scale(1.3)` : `scale(1)`
  )
  const stripeMargins = offset.interpolate(o =>
    o < 100 ? "30px auto" : `10px auto`
  )

  return (
    <HeroContainer
      ref={ref}
      id={"hero"}
      style={{
        opacity: sectionOpacity,
      }}
    >
      <RightSide
        style={{
          transform: transitionRight,
        }}
      >
        {/* <img src={mountainback} /> */}
        <PictureContainer>
          <Picture
            style={{ transform: transitionImage }}
            fluid={avatar.childImageSharp.fluid}
            alt={avatar.name}
          />
        </PictureContainer>
        <LeftSide
          style={{
            width: leftWidth,
          }}
        >
          <ContentLeft style={{ transform: contentScale }}>
            <HomeTitle>
              {title1} <span>{title2}</span>
            </HomeTitle>
            <Stripe style={{ margin: stripeMargins }} />
            <HomeSubtitle>{subtitle}</HomeSubtitle>
          </ContentLeft>
        </LeftSide>
      </RightSide>
    </HeroContainer>
  )
}

Hero.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Hero

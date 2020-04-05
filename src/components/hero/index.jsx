import React, { useState, useEffect, useRef, useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useSpring } from "react-spring"
import PropTypes from "prop-types"

import {
  HeroContainer,
  RightSide,
  PictureContainer,
  Picture,
  LeftSide,
  ContentLeft,
  HomeTitle,
  Stripe,
  HomeSubtitle,
} from "./styled-components"

//utils:
import useWindowSize from "../../utils/hooks/useWindowSize"

import { StoreContext } from "../store"

const Hero = ({ data: { title1, title2, subtitle } }) => {
  const { avatar } = useStaticQuery(graphql`
    query {
      avatar: file(absolutePath: { regex: "/profile-cut.png/" }) {
        childImageSharp {
          fluid(maxWidth: 400, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const ref = useRef()
  const [width, setWidth] = useState(0)
  const {
    isTop: [, setIsTop],
    isHero: [, setIsHero],
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
        setIsHero(true)
        window.addEventListener("scroll", parallaxShift, {
          capture: false,
          passive: true,
        })
      } else {
        setIsHero(false)
        window.removeEventListener("scroll", parallaxShift, {
          capture: false,
          passive: true,
        })
      }
    })
    observer.observe(ref.current)
  })

  // const sectionOpacity = offset.interpolate(o => `${1 - o / 7000}`)

  const transitionRight = offset.interpolate(o =>
    width > 750
      ? `translate3d(0, ${o / 1.8}px, 0)`
      : `translate3d(0, ${o / 2.5}px, 0)`
  )

  const transitionImage = offset.interpolate(
    o => `translate3d(0, ${o * 4}px, 0)`
  )

  const leftWidth = offset.interpolate(o => `${100 - o / 4}vw`)

  const contentScale = offset.interpolate(o =>
    o < 100 ? `scale(1.3)` : `scale(1)`
  )
  const stripeMargins = offset.interpolate(o =>
    o < 100 ? "30px auto" : `5px auto`
  )

  return (
    <HeroContainer
      ref={ref}
      id={"hero"}
      style={
        {
          // opacity: sectionOpacity,
        }
      }
    >
      <RightSide
        style={{
          transform: transitionRight,
        }}
      >
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

import React, { useState, useEffect, useRef } from "react"
// import { useStaticQuery, graphql } from "gatsby"
// import Image from "gatsby-image"
import styled from "styled-components"
import { useSpring, animated as a } from "react-spring"

//utils:
import useWindowSize from "../../utils/hooks/useWindowSize"

//assets
import { breakpoints } from "../../assets/styles/breakpoints"
import variables from "../../assets/styles/variables"

const HeroContainer = styled(a.header)`
  overflow: hidden;
  background: #dfdf;
  color: white;
  position: relative;
  width: 100vw;
  height: 250vh;

  user-select: none;
  user-drag: none;
`

const RightSide = styled(a.div)`
  background: red;
  position: relative;
  // left: 50%;
  width: 100vw;
  height: 120vh;
  top: -10vw;
  z-index: 10;
`

// const Picture = styled(Image)`
//   position: absolute;
//   left: 60%;
//   top: 20%;
//   width: 400px;
// `

const LeftSide = styled(a.div)`
  background: ${variables.secondary};
  position: absolute;
  left: 0;
  top: 0;
  min-width: 50vw;

  // width: 100vw;
  height: 120vh;
  // top: -10vw;
  // z-index: 9;
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

// const rubberBandKeyFrame = keyframes`
// 0% {
//   transform: scale(1);
// }
// 30% {
//   color: gold;
//   transform: scaleX(1.5) scaleY(0.75);
// }
// 40% {
//   color: white;
//   transform: scaleX(0.75) scaleY(1.5);
// }
// 60% {
//   color: tomato;

//   transform: scaleX(1.15) scaleY(0.85);
// }
// 100% {
//   transform: scale(1);
// }
// `

// const TitleLetter = styled(a.span)`
//   color: white;
//   animation-duration: 2.5s;
//   animation-fill-mode: both;
//   animation-iteration-count: infinite;

//   &:hover {
//     animation: ${rubberBandKeyFrame} 2s ease-in-out;
//   }
// `

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
`

// const HomeHeader = styled.div`
//   display: flex;
//   flex-direction: column;
//   text-align: center;
//   margin: 40px auto;
//   color: white;
//   position: relative;
//   z-index: 10;

//   @media screen and (min-width: ${breakpoints.large}px) {
//     height: initial;
//   }
// `

// const ImageLeft = styled.img`
//   left: 7vw;
//   position: absolute;
//   width: 100px;
// `
// const ImageRight = styled.img`
//   right: 5vw;
//   position: absolute;
//   width: 200px;
// `

// const HeroLinkDown = styled.a`
//   color: white;
//   text-decoration: none;
//   position: absolute;
//   bottom: 10px;
//   display: block;
//   padding-bottom: 40px;
//   z-index: 100;
//   cursor: pointer;

//   ::after {
//     content: "";
//     position: absolute;
//     width: 15px;
//     height: 10px;
//     left: 36px;
//     bottom: 20px;
//     background-repeat: no-repeat;
//     background-image: url(${arrowDown});
//     animation: flip-flop 1s infinite;
//   }

//   @keyframes flip-flop {
//     0% {
//       transform: translate(0, 0);
//     }
//     50% {
//       transform: translate(0, 15px);
//     }
//   }

//   transition: all 0.4s ease;
//   opacity: 1;

//   :hover {
//     opacity: 0.6;
//   }
// `

const Hero = ({ data: { title1, title2, subtitle, link, linkText } }) => {
  // const { bgImg } = useStaticQuery(graphql`
  //   query {
  //     bgImg: file(absolutePath: { regex: "/bluesmoke.jpg/" }) {
  //       id
  //       name
  //       childImageSharp {
  //         fluid {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `)

  const ref = useRef()
  const [, setWidth] = useState(0)
  // const [posY, setPosY] = useState(0)

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
  }

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      !!ref.current.getBoundingClientRect().bottom
    ) {
      window.addEventListener("scroll", () => {
        parallaxShift()
      })
    }
    return () => window.removeEventListener("scroll", parallaxShift)
  })

  const sectionOpacity = offset.interpolate(o => `${1 - o / 7000}`)

  const transitionRight = offset.interpolate(o => `translateY(${o / 2.5}px)`)

  // const transitionImage = offset.interpolate(o => `translateY(${o * 4}px)`)

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
        {/* <Picture
          style={{ transform: transitionImage }}
          fluid={bgImg.childImageSharp.fluid}
          alt={bgImg.name}
        /> */}

        <LeftSide
          style={{
            width: leftWidth,
          }}
        >
          <ContentLeft style={{ transform: contentScale }}>
            <HomeTitle style={{}}>
              {title1} <span>{title2}</span>
            </HomeTitle>
            <Stripe style={{ margin: stripeMargins }} />
            <HomeSubtitle style={{}}>{subtitle}</HomeSubtitle>
          </ContentLeft>
        </LeftSide>
      </RightSide>

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

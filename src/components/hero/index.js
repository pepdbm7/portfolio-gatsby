import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { useSpring, animated } from "react-spring"
import useIntersect from "../../utils/useIntersect"

//utils:
import useWindowSize from "../../utils/useWindowSize"

//assets
import { breakpoints } from "../../assets/styles/breakpoints"
import variables from "../../assets/styles/variables"

//images:
import arrowDown from "../../images/arrow_down.svg"
import arrowDownDrop from "../../images/arrow_drop_down.svg"

const HomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 100vh;
  width: 100%;
  position: relative;
  /* color: white; */
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

    background-color: #000;
    opacity: 0.6;
  }

  @media screen and (min-width: ${breakpoints.large}px) {
    position: relative;

    &:before {
      opacity: 0.5;
    }
  }

  img {
    object-fit: cover;
    min-width: 100%;
    min-height: 102%;
  }
`

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
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

const HomeTitle = styled.h1`
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
  }
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

const ScrollContainer = styled(animated.div)`
  @media screen and (min-width: ${breakpoints.large}px) {
    height: 200vh;
    margin-bottom: 1px;
  }
`
const Fixed = styled(animated.div)`
  position: fixed;
  @media screen and (min-width: ${breakpoints.large}px) {
    width: 100%;
    top: 0;
  }
`

const Hero = ({ data: { title1, title2, subtitle, link, linkText } }) => {
  const buildThresholdArray = () => Array.from(Array(100).keys(), i => i / 100)
  //useIntersect devulve ref y entry. ref es la referencia del elemento del cual queremos controlar su visualización en el viewport
  //entry es el objeto con la información de la posición del elemento
  const [ref, entry] = useIntersect({
    //threshold es la cantidad de elemento visible para que se dispare el evento
    threshold: buildThresholdArray(),
  })

  //convertir intersectionRatio en valor con dos decimales
  const ratio = (Math.round(entry.intersectionRatio * 100) / 100) * 2

  const { o } = useSpring({
    from: { o: 0 },
    o: ratio,
  })

  const widthWindow = useWindowSize()

  const [width, setWidth] = useState(null)

  useEffect(() => {
    setWidth(widthWindow.width)
  }, [widthWindow])

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
        <HomeHeader>
          <HomeTitle>
            {title1} <span>{title2}</span>
          </HomeTitle>
          <HomeSubtitle>{subtitle}</HomeSubtitle>
        </HomeHeader>
      </HeroContent>
      <Fixed>
        <HomeContainer>
          <HomeBackground />

          <HeroLinkDown href={link}>{linkText}</HeroLinkDown>
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
          </HomeHeader>
        </HeroContent>

        <HeroLinkDown to={link}>{linkText}</HeroLinkDown>
      </HomeContainer>
    </ScrollContainer>
  )
}

export default Hero

import styled from "styled-components"
import Image from "gatsby-image"

//Assets
import variables from "../../assets/styles/variables"
import { breakpoints } from "../../assets/styles/breakpoints"

// spring:
import { animated as a } from "react-spring"

const HeroContainer = styled(a.header)`
  overflow: hidden;
  color: white;
  position: relative;
  width: 100vw;
  height: 160vh;
  pointer-events: none;
  box-shadow: ${variables.shadow};
  background: ${variables.secondary};
  @media screen and (min-width: ${breakpoints.tablet}px) {
    height: 120vh;
  }
`

const RightSide = styled(a.div)`
  background: linear-gradient(to left, tomato 0%, gold 100%);
  position: relative;
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
  border: 5px solid tomato;
  margin: auto 10%;
  background:
  box-shadow: ${variables.shadow};
`

const LeftSide = styled(a.div)`
  background: ${variables.secondary};
  background: linear-gradient(to right, ${variables.secondary} 0%, black 100%);
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

const HomeTitle = styled.span`
  font-size: 50px;
  text-align: center;
  letter-spacing: -1.02px;
  line-height: 64px;
  margin: 0 auto 20px;
  transition: 0.4s all ease;
  background: linear-gradient(to right, tomato 30%, gold 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (min-width: ${breakpoints.phone}px) {
    font-size: 69px;

    letter-spacing: -0.58px;
    line-height: 78px;
    font-weight: bold;
  }
`

const Stripe = styled(a.div)`
  height: 2px;
  width: 80%;
  background: linear-gradient(to right, tomato 0%, gold 100%);
  transition: 0.6s all ease;
`

const HomeSubtitle = styled.h1`
  font-size: 23px;
  text-align: center;
  letter-spacing: 0px;
  line-height: 29px;
  margin: 20px auto 0;
  @media screen and (min-width: ${breakpoints.large}px) {
    font-size: 33px;
    text-align: center;
    letter-spacing: 0px;
    line-height: 39px;
    margin-top: 20px;
  }
  color: gold;
  background: linear-gradient(gold 30%, tomato 95%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export {
  HeroContainer,
  RightSide,
  PictureContainer,
  Picture,
  LeftSide,
  ContentLeft,
  HomeTitle,
  Stripe,
  HomeSubtitle,
}

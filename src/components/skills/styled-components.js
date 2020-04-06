import styled from "styled-components"
import Image from "gatsby-image"

//Assets
import variables from "../../assets/styles/variables"
import devices, { breakpoints } from "../../assets/styles/breakpoints"

// spring:
import { animated as a } from "react-spring"

const Container = styled.section`
  color: white;
  background: ${variables.secondary};
  background: linear-gradient(
    to bottom,
    ${variables.secondary} 0%,
    ${variables.secondaryDark}
  );
  position: relative;
  overflow: hidden;
  padding: 0 0 60px;
  min-height: 100vh;
  z-index: 2;
  transition: 0.4s all ease;
`

const Circle = styled(a.div)`
  position: absolute;
  left: -200vw;
  top: -200vh;
  opacity: 0.5;
  width: 400vw;
  height: 400vh;
  background-color: transparent;
  background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234169e1' fill-opacity='0.4'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  transition: 0.4s all ease;
`

const Title = styled(a.h2)`
  text-align: center;
  width: fit-content;
  margin: 100px auto 60px;
  z-index: 0;
  line-height: 39px;

  @media screen and (min-width: ${breakpoints.large}px) {
    margin: 180px auto 80px;
  }
`

const Info = styled(a.ul)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 15%;
  user-select: none;
  li {
    list-style: none;
    padding: 0 0 20px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      height: 90%;
    }
  }


  @media screen and (min-width: ${breakpoints.tablet}px) {
    p {
      max-width: 600px;
    }
`

const IconsContainer = styled.div`
  width: 65%;
  min-height: 50vh;
  margin: 20px auto 190px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
`

const LogostListContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;

  width: -webkit-fill-available;
  width: -moz-available;
  width: fill-available;

  margin: 0 -10px;
  z-index: 3;
`

const LogoContainer = styled.div`
  width: 50%;
  padding: 0 10px;
  box-sizing: border-box;
  height: 60px;
  margin-top: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  @media ${devices.tablet} {
    width: 33%;
    margin-top: 80px;
  }

  .gatsby-image-wrapper,
  img {
    width: 60px;
    height: fit-content;
    user-select: none;
    user-drag: none;
  }
`

const LogoImage = styled(Image)`
  width: inherit;
  height: inherit;
`

const DegradadoBottom = styled.div`
  background: linear-gradient(
    to bottom,
    ${variables.primaryLight} 0%,
    whitesmoke
  );
  height: 100px;
`

export {
  Container,
  Circle,
  Title,
  Info,
  IconsContainer,
  LogostListContainer,
  LogoContainer,
  LogoImage,
  DegradadoBottom,
}

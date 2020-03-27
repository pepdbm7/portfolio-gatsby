import styled from "styled-components"
import Image from "gatsby-image"

//Assets
import variables from "../../assets/styles/variables"
import devices, { breakpoints } from "../../assets/styles/breakpoints"

// spring:
import { animated as a } from "react-spring"

const Navigator = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: black;
`

const NavBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  background: ${({ isOpen, isTop }) =>
    isOpen || isTop ? "transparent" : "black"};
  top: 0;
  width: 100vw;
  height: ${({ isTop }) => (isTop ? "80px" : "60px")};
  box-sizing: border-box;
  z-index: 1000;
  border-bottom: ${({ isTop }) => !isTop && "1px solid #6e6e6e"};

  transition: 0.2s;

  @media screen and (min-width: ${breakpoints.large}px) {
    height: ${({ isTop }) => (isTop ? "100px" : "80px")};
  }
`

const SPLogo = styled.a`
  width: 80px;
  transition: 0.4s all ease;
  opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
  visibility: ${({ isOpen }) => (isOpen ? "hidden" : "visible")};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ isTop }) => (isTop ? "16px" : "20px")};
  color: cornflowerblue;
  background: ${({ isHero }) =>
    isHero
      ? `linear-gradient(to right, tomato 30%, gold 100%)`
      : `linear-gradient(to right, SlateBlue 0%, lightblue 100%)`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-decoration: none;
  font-family: fantasy;
  font-style: oblique;
  text-decoration: none;

  .gatsby-image-wrapper,
  img {
    width: inherit;
    height: inherit;
    user-select: none;
    user-drag: none;
  }

  &:hover {
    transform: translate3d(0, -3px, 0);
  }
`

const SectionsLinksBar = styled.div`
  display: flex;
  margin: 0 0 0 auto;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    color: white;
    opacity: 1;
    margin-left: 40px;

    font-weight: bold;

    transition: all 0.4s ease;

    &:hover {
      transform: scale(1.2);
    }
  }
`

const CollapsedMenu = styled(a.div)`
  display: flex;
  margin: auto 0;
  flex-direction: column;
  color: white;
  background-color: ${variables.secondaryDark};
  padding: 0;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  transition: 0.3s;

  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: ${({ isOpen }) => (isOpen ? "" : "none")};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};

  z-index: 999;

  a {
    text-decoration: none;
    color: white;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    padding: 0;
    font-weight: bold;

    position: relative;
  }
`

const CollapsedItemsContainer = styled.div`
  width: 100%;
  max-width: calc(100% - 60px);
  margin: 80px auto;
`

const BurgerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  margin: auto 0 auto auto;

  height: 19px;
  width: 27px;
  cursor: pointer;

  position: relative;

  div {
    display: flex;
    height: 3px;
    transition: all 0.2s ease;
    background-color: white;
  }
`

const TopLine = styled.div`
  transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "none")};
  transform-origin: top left;
  position: absolute;
  top: 0;
  left: 0;

  width: ${({ isOpen }) => (isOpen ? "24px" : "100%")};
`

const MiddleLine = styled.div`
  opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
  transform: ${({ isOpen }) => (isOpen ? "translateX(-16px)" : "none")};
  width: 100%;
`

const BottomLine = styled.div`
  transform: ${({ isOpen }) =>
    isOpen ? "translateX(-1px) rotate(-45deg)" : "none"};
  transform-origin: bottom left;
  position: absolute;
  bottom: 0;
  left: ${({ isOpen }) => (isOpen ? "1px" : "0")};

  width: ${({ isOpen }) => (isOpen ? "24px" : "100%")};
`
export {
  Navigator,
  NavBarContainer,
  SPLogo,
  SectionsLinksBar,
  CollapsedMenu,
  CollapsedItemsContainer,
  BurgerContainer,
  TopLine,
  MiddleLine,
  BottomLine,
}

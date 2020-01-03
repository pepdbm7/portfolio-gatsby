import React, { useState, useEffect, useContext } from "react"
// import { useStaticQuery, graphql } from "gatsby"
// import Image from "gatsby-image"
import styled from "styled-components"
import PropTypes, { object } from "prop-types"
import { useTrail, animated as a } from "react-spring"

import { StoreContext } from "../store"

//Utils
import Wrapper from "../../utils/grid/wrapper"
import Row from "../../utils/grid/row"
import Column from "../../utils/grid/column"
import useWindowSize from "../../utils/hooks/useWindowSize"

//Assets
import variables from "../../assets/styles/variables"
import { breakpoints } from "../../assets/styles/breakpoints"

//Components
import Burger from "./burgerIcon.js"

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
  width: 70px;
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
  @media screen and (min-width: ${breakpoints.large}px) {
    width: ${({ isTop }) => (isTop ? "70px" : "50px")};
    height: ${({ isTop }) => (isTop ? "50px" : "40px")};
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

//component:
const NavBar = ({ data }) => {
  // const graphqlData = useStaticQuery(graphql`
  //   query NavbarQuery {
  //     brandLogo: file(absolutePath: { regex: "/logo_pepdev.png/" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 120) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `)

  const size = useWindowSize()

  const {
    isTop: [isTop],
    isHero: [isHero],
  } = useContext(StoreContext)

  const [width, setWidth] = useState(null)
  const [viewNavItems, setViewNavItems] = useState(false)

  const handleBurgerClick = () => {
    setViewNavItems(!viewNavItems)
    document.getElementsByTagName("body")[0].classList.toggle("scrollDisabled")
  }

  useEffect(() => {
    setWidth(size.width)
  }, [size])

  const trail = useTrail(data.length, {
    delay: 400,
    from: { opacity: 0, transform: "translate3d(0,-40px,0)" },
    to: {
      opacity: viewNavItems ? 1 : 0,
      transform: viewNavItems
        ? "translate3d(0,0px,0)"
        : "translate3d(0,-40px,0)",
    },
  })

  //collapsed menu:
  return width < breakpoints.desktop ? (
    <Navigator>
      <NavBarContainer isTop={isTop} isPhone isOpen={viewNavItems}>
        <Wrapper>
          <Row>
            <Column xs={12}>
              <SPLogo
                isTop={isTop}
                isHero={isHero}
                isOpen={viewNavItems}
                href={"#hero"}
                onClick={() => setViewNavItems(false)}
              >
                PepDev
                {/* <Image
                  fluid={graphqlData.brandLogo.childImageSharp.fluid}
                  alt={"profile"}
                /> */}
              </SPLogo>
              <Burger isOpen={viewNavItems} handleClick={handleBurgerClick} />
            </Column>
          </Row>
        </Wrapper>
      </NavBarContainer>

      <CollapsedMenu isOpen={viewNavItems}>
        <Wrapper>
          <Row>
            <Column xs={12}>
              <CollapsedItemsContainer>
                {data &&
                  trail.map((props, i) => (
                    <a.a
                      key={i}
                      onClick={handleBurgerClick}
                      href={data[i].anchor}
                      style={props}
                    >
                      {data[i].name}
                    </a.a>
                  ))}
              </CollapsedItemsContainer>
            </Column>
          </Row>
        </Wrapper>
      </CollapsedMenu>
    </Navigator>
  ) : (
    <NavBarContainer isTop={isTop}>
      <Wrapper>
        <Row>
          <Column xs={12}>
            <SPLogo
              isTop={isTop}
              href={"#hero"}
              isHero={isHero}
              isOpen={viewNavItems}
              onClick={() => setViewNavItems(false)}
            >
              PepDev
            </SPLogo>
            <SectionsLinksBar>
              {data &&
                data.map((section, i) => (
                  <a key={i} href={section.anchor} className="bodySmall">
                    {section.name}
                  </a>
                ))}
            </SectionsLinksBar>
          </Column>
        </Row>
      </Wrapper>
    </NavBarContainer>
  )
}

NavBar.propTypes = {
  data: PropTypes.arrayOf(object).isRequired,
}

export default NavBar

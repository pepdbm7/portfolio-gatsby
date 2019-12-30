import React, { useState, useEffect } from "react"
// import { useStaticQuery, graphql } from "gatsby"
// import Image from "gatsby-image"
import styled from "styled-components"
import { useSpring, useTrail, animated as a } from "react-spring"

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

  transition: 0.2s;

  opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
  visibility: ${({ isOpen }) => (isOpen ? "hidden" : "visible")};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ isTop }) => (isTop ? "16px" : "20px")};
  color: cornflowerblue;
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
`

const SectionsLinksBar = styled.div`
  display: flex;
  margin: 0 0 0 auto;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  a {
    position: relative;
    text-decoration: none;
    color: white;
    opacity: 1;

    font-weight: bold;

    transition: all 0.4s ease;

    & + a {
      margin-left: 40px;
    }

    &:after {
      position: absolute;
      bottom: -1px;
      left: 0;
      content: "";
      width: 100%;
      height: 1px;
      background: #444;
      transform: scale(0, 1);
      transform-origin: left top;
      transition: transform 0.3s;
    }
    &:hover:after {
      transform: scale(1, 1);
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

  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: ${({ isOpen }) => !isOpen && "none"};
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

  const [width, setWidth] = useState(null)
  const [viewNavItems, setViewNavItems] = useState(false)
  const [isTop, setIsTop] = useState(true)

  const handleBurgerClick = () => {
    !window.pageYOffset && setIsTop(true)
    setViewNavItems(!viewNavItems)
    document.getElementsByTagName("body")[0].classList.toggle("scrollDisabled")
  }

  const isTopOnScroll = () => setIsTop(!window.pageYOffset)

  useEffect(() => {
    setWidth(size.width)
  }, [size])

  useEffect(() => {
    console.log({ viewNavItems })
  }, [viewNavItems])

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsTop(true)
      window.addEventListener("scroll", () => {
        isTopOnScroll()
      })
    }
    return () => window.removeEventListener("scroll", isTopOnScroll)
  }, [])

  const collapsedProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: viewNavItems ? 1 : 0 },
  })

  const trail = useTrail(data.length, {
    delay: 300,
    from: { opacity: 0, transform: "translate3d(0,-40px,0)" },
    to: {
      opacity: viewNavItems ? 1 : 0,
      transform: viewNavItems
        ? "translate3d(0,0px,0)"
        : "translate3d(0,-40px,0)",
    },
  })

  //collapsed menu:
  return width < breakpoints.large ? (
    <Navigator>
      <NavBarContainer isTop={isTop} isPhone isOpen={viewNavItems}>
        <Wrapper>
          <Row>
            <Column xs={12}>
              <SPLogo
                isTop={isTop}
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

      {/* <FadeIn condition={viewNavItems}> */}
      <CollapsedMenu isOpen={viewNavItems} style={{ collapsedProps }}>
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
      {/* </FadeIn> */}
    </Navigator>
  ) : (
    <NavBarContainer isTop={isTop}>
      <Wrapper>
        <Row>
          <Column xs={12}>
            <SPLogo isTop={isTop} href={"#hero"}>
              {/* <Image
                fluid={graphqlData.avatar.childImageSharp.fluid}
                alt={"profile"}
              /> */}
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

export default NavBar

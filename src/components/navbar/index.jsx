import React, { useState, useEffect, useContext } from "react"
import {
  Navigator,
  NavBarContainer,
  SPLogo,
  SectionsLinksBar,
  CollapsedMenu,
  CollapsedItemsContainer,
  CollapsedItemAnchor,
} from "./styled-components"

import PropTypes, { object } from "prop-types"
import { useTrail, animated as a } from "react-spring"

import { StoreContext } from "../store"

//Utils
import Wrapper from "../../utils/grid/wrapper"
import Row from "../../utils/grid/row"
import Column from "../../utils/grid/column"
import useWindowSize from "../../utils/hooks/useWindowSize"

//Assets
import { breakpoints } from "../../assets/styles/breakpoints"

//Components
import Burger from "./burgerIcon.jsx"

//component:
const NavBar = ({ data }) => {
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
    from: {
      opacity: 0,
      transform: "translate3d(0,-40px,0)",
      letterSpacing: "20px",
    },
    to: {
      opacity: viewNavItems ? 1 : 0,
      transform: viewNavItems
        ? "translate3d(0,0px,0)"
        : "translate3d(0,-40px,0)",
      letterSpacing: viewNavItems ? "0" : "20px",
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
                    <CollapsedItemAnchor
                      key={i}
                      onClick={handleBurgerClick}
                      href={data[i].anchor}
                      style={props}
                    >
                      {data[i].name}
                    </CollapsedItemAnchor>
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

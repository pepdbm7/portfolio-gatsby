import React from "react"
import { useSpring, Parallax, ParallaxLayer, animated as a } from "react-spring"
import styled from "styled-components"

//Utils
import Wrapper from "../../utils/grid/wrapper"
import Row from "../../utils/grid/row"
import Column from "../../utils/grid/column"
import useIntersect from "../../utils/useIntersect"

//Assets
import variables from "../../assets/styles/variables"

//styles:
import { breakpoints } from "../../assets/styles/breakpoints"

const Container = styled.section`
  background: white;
  position: relative;
  z-index: 0;
  color: white;
  background: ${variables.secondary};
  padding: 0 0 100px;
`

const Title = styled(a.h2)`
  text-align: center;
  width: 100%;
  margin: 100px auto 60px;
  position: relative;
  z-index: 0;
  line-height: 39px;

  @media screen and (min-width: ${breakpoints.large}px) {
    margin: 180px auto 80px;
  }
`

class TechParallax extends React.Component {
  render() {
    return (
      <Parallax
        pages={3}
        scrolling={false}
        horizontal
        ref={ref => (this.parallax = ref)}
      >
        <ParallaxLayer offset={0} speed={0.5}>
          <span onClick={() => this.parallax.scrollTo(1)}>
            Layers can contain anything
          </span>
        </ParallaxLayer>
      </Parallax>
    )
  }
}

export default TechParallax

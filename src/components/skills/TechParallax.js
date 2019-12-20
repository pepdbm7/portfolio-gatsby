import React from "react"
import { useSpring, animated as a } from "react-spring"
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

//images:
import html from "../../images/html_css.png"
import JS from "../../images/JavaScript-logo.jpg"
import react from "../../images/react.png"
import vue from "../../images/vue.png"
import Node from "../../images/node.png"
import mongodb from "../../images/mongodb.png"
import graphql from "../../images/graphql.png"
import gatsby from "../../images/gatsby-icon.png"
import mysql from "../../images/mysql.jpg"

const Container = styled.div`
  /* background: white; */
  width: 65%;
  height: 40vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`

const HtmlCss = styled(a.span)`
  flex-basis: 20%;
  background-image: url(${html});
  background-size: contain;
  background-repeat: no-repeat;
  width: 150px;
  height: 50px;
`
const Js = styled(a.span)`
  flex-basis: 20%;
  background-image: url(${JS});
  background-size: contain;
  background-repeat: no-repeat;
  width: 50px;
  height: 50px;
`
const ReactImg = styled(a.span)`
  flex-basis: 20%;
  background-image: url(${react});
  background-size: contain;
  background-repeat: no-repeat;
  width: 50px;
  height: 50px;
`
const VueImg = styled(a.span)`
  flex-basis: 20%;
  background-image: url(${vue});
  background-size: contain;
  background-repeat: no-repeat;
  width: 60px;
  height: 50px;
`

const NodeImg = styled(a.span)`
  flex-basis: 20%;
  background-image: url(${Node});
  background-size: contain;
  background-repeat: no-repeat;
  width: 60px;
  height: 50px;
`

const MongoImg = styled(a.span)`
  flex-basis: 20%;
  background-image: url(${mongodb});
  background-size: contain;
  background-repeat: no-repeat;
  width: 60px;
  height: 50px;
`

const GraphQl = styled(a.span)`
  flex-basis: 20%;
  background-image: url(${graphql});
  background-size: contain;
  background-repeat: no-repeat;
  width: 60px;
  height: 50px;
`

const Gatsby = styled(a.span)`
  flex-basis: 20%;
  background-image: url(${gatsby});
  background-size: contain;
  background-repeat: no-repeat;
  width: 60px;
  height: 50px;
`

const MySql = styled(a.span)`
  flex-basis: 20%;
  background-image: url(${mysql});
  background-size: contain;
  background-repeat: no-repeat;
  width: 60px;
  height: 50px;
`

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 8}px,${y / 9}px,0)`
const trans2 = (x, y) => `translate3d(${x / 6}px,${y / 6}px,0)`
const trans3 = (x, y) => `translate3d(${x / 7}px,${y / 5.5}px,0)`
const trans4 = (x, y) => `translate3d(${x / 9}px,${y / 7.5}px,0)`
const trans5 = (x, y) => `translate3d(${x / 7}px,${y / 6}px,0)`

const TechParallax = () => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }))
  return (
    <Container
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <HtmlCss style={{ transform: props.xy.interpolate(trans1) }} />
      <Js style={{ transform: props.xy.interpolate(trans2) }} />
      <ReactImg style={{ transform: props.xy.interpolate(trans3) }} />
      <GraphQl style={{ transform: props.xy.interpolate(trans3) }} />
      <Gatsby style={{ transform: props.xy.interpolate(trans4) }} />
      <VueImg style={{ transform: props.xy.interpolate(trans5) }} />
      <NodeImg style={{ transform: props.xy.interpolate(trans1) }} />
      <MongoImg style={{ transform: props.xy.interpolate(trans2) }} />
      <MySql style={{ transform: props.xy.interpolate(trans5) }} />
    </Container>
  )
}

export default TechParallax

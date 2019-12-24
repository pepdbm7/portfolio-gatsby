import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { useSpring, useTrail, animated as a } from "react-spring"

import styled from "styled-components"

//Utils
import useIntersect from "../../utils/hooks/useIntersect"

//styles:
import { breakpoints } from "../../assets/styles/breakpoints"

const Container = styled.div`
  width: 65%;
  height: 50vh;
  margin: 100px auto;
  display: flex;
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

const LogoContainer = styled(a.div)`
  width: 20%;
  padding: 0 10px;
  box-sizing: border-box;
  height: 60px;
  margin-top: 80px;

  display: flex;
  justify-content: center;
  align-items: center;

  @media ${breakpoints.tablet} {
    width: 33%;
    margin-top: 50px;
  }

  @media ${breakpoints.phone} {
    width: 45%;
    margin-top: 40px;
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

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 15}px,${y / 15}px,0)`
const trans2 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
const trans3 = (x, y) => `translate3d(${x / 11}px,${y / 11}px, 0)`
const trans4 = (x, y) => `translate3d(${x / 10}px,${y / 9}px,0)`
const trans5 = (x, y) => `translate3d(${x / 12}px,${y / 10}px,0)`
const trans6 = (x, y) => `translate3d(${x / 9}px,${y / 12}px,0)`

const TechParallax = () => {
  const { images } = useStaticQuery(graphql`
    query {
      images: allFile(
        filter: {
          extension: { regex: "/(jpeg|jpg|gif|png)/" }
          sourceInstanceName: { eq: "logos" }
        }
      ) {
        edges {
          node {
            id
            name
            childImageSharp {
              fluid(maxWidth: 60) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }))

  const [ref, entry] = useIntersect({
    threshold: 0,
  })

  const trail = useTrail(images.edges.length, {
    opacity: entry.intersectionRatio ? 1 : 0,
    transform: `scale(${entry.intersectionRatio ? 1 : 1.4})`,
    from: {
      opacity: 0,
      transform: `scale(1.4)`,
    },
  })

  return (
    <Container
      ref={ref}
      // onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <LogostListContainer>
        {images.edges &&
          trail.map((props, index) => (
            <LogoContainer
              key={`LogoContainer-${images.edges[index].node.id}`}
              // style={{ transform: props.xy.interpolate(trans1) }}
            >
              <a.div style={props}>
                <LogoImage
                  fluid={images.edges[index].node.childImageSharp.fluid}
                  alt={images.edges[index].node.name}
                />
              </a.div>
            </LogoContainer>
          ))}
      </LogostListContainer>
    </Container>
  )
}

export default TechParallax

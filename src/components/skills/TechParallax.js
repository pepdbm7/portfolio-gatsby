import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { useTrail, animated as a } from "react-spring"

import styled from "styled-components"

//Utils
import useIntersect from "../../utils/hooks/useIntersect"

//styles:
import devices from "../../assets/styles/breakpoints"

const Container = styled.div`
  width: 65%;
  min-height: 50vh;
  margin: 20px auto 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;

  @media ${devices.tablet} {
    margin: 100px auto 120px;
  }
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
    <Container ref={ref}>
      <LogostListContainer>
        {images.edges &&
          trail.map((props, index) => (
            <LogoContainer key={`LogoContainer-${images.edges[index].node.id}`}>
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

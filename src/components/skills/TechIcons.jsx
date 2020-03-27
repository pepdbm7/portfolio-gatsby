import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useSpring, useTrail, animated as a } from "react-spring"

import {
  IconsContainer,
  LogostListContainer,
  LogoContainer,
  LogoImage,
} from "./styled-components"

//Utils
import useIntersect from "../../utils/hooks/useIntersect"

const TechIcons = () => {
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

  const { format } = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 2,
  })
  const buildThresholdArray = () => Array.from(Array(100).keys(), i => i / 100)
  const [ref, entry] = useIntersect({
    threshold: buildThresholdArray(),
  })
  const ratio = format(entry.intersectionRatio)

  const titleProps = useSpring({
    from: {
      opacity: 0,
      transform: `translate3d(0px, 50px, 0)`,
    },
    to: {
      opacity: ratio > 0.1 ? 1 : 0,
      transform:
        ratio > 0.1 ? `translate3d(0px, 0px, 0)` : `translate3d(0px, 50px, 0)`,
    },
    config: { duration: 1000 },
  })

  const trail = useTrail(images.edges.length, {
    from: {
      opacity: 0,
      transform: `scale(0.4)`,
    },
    to: {
      opacity: ratio > 0.2 ? 1 : 0,
      transform: `scale(${ratio > 0.2 ? 1 : 0.4})`,
    },
    config: { duration: 1500 },
  })

  return (
    <IconsContainer ref={ref}>
      <a.h3 style={titleProps} className={"headingMedium"}>
        Technologies
      </a.h3>
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
    </IconsContainer>
  )
}

export default TechIcons

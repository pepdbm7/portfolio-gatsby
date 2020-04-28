import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"

// styled-components:
import {
  DecorationLayer,
  ProjectCardContainer,
  CardHeader,
  ProjectTitle,
  ProjectSubTitle,
  ProjectImageContainer,
  ProjectImage,
  Divider,
  ProjectDescription,
  DescriptionPoint,
} from "./styled-components"

import { useSpring } from "react-spring"

//Utils
import Column from "../../utils/grid/column"
import useIntersect from "../../utils/hooks/useIntersect"

// images:
const ProjectCard = ({ project, id }) => {
  const images = useStaticQuery(graphql`
    query {
      planbe: file(absolutePath: { regex: "/planbe.png/" }) {
        childImageSharp {
          fluid(maxWidth: 450) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      meetup: file(absolutePath: { regex: "/meetup.png/" }) {
        childImageSharp {
          fluid(maxWidth: 450) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      spotify: file(absolutePath: { regex: "/spotify-cube.jpg/" }) {
        childImageSharp {
          fluid(maxWidth: 450) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      chat: file(absolutePath: { regex: "/chat.png/" }) {
        childImageSharp {
          fluid(maxWidth: 450) {
            ...GatsbyImageSharpFluid
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

  const cardsProps = useSpring({
    from: {
      opacity: 0,
      transform: `translate3d(0px, 50px, 0) scale(0.8)`,
    },
    to: {
      opacity: ratio > 0 ? 1 : 0,
      transform:
        ratio > 0
          ? `translate3d(0px, 0px, 0) scale(1)`
          : `translate3d(0px, 50px, 0) scale(0.8)`,
    },
    config: { duration: 800 },
  })

  return (
    <Column xs={12} sm={6} align="center">
      <DecorationLayer id={id} ref={ref} style={cardsProps}>
        <ProjectCardContainer id={id}>
          <CardHeader>
            <ProjectTitle
              className={"bodyNormal"}
              dangerouslySetInnerHTML={{ __html: project.title }}
            />
            <ProjectSubTitle
              className={"bodyNormal"}
              dangerouslySetInnerHTML={{ __html: project.subtitle }}
            />
            <ProjectImageContainer>
              <ProjectImage
                fluid={images[project.name].childImageSharp.fluid}
                alt="project image"
              />
            </ProjectImageContainer>
          </CardHeader>
          <Divider />
          <ProjectDescription>
            <ul>
              {project.description.map((point, id) => (
                <DescriptionPoint
                  className="bodyNormal"
                  key={id}
                  id={id}
                  dangerouslySetInnerHTML={{ __html: point }}
                />
              ))}
            </ul>
          </ProjectDescription>
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
            Visit Site
          </a>
        </ProjectCardContainer>
      </DecorationLayer>
    </Column>
  )
}

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
}

export default ProjectCard

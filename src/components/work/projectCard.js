import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import { useSpring, animated as a } from "react-spring"

//Assets
import variables from "../../assets/styles/variables"

//Utils
import Column from "../../utils/grid/column"
import useIntersect from "../../utils/hooks/useIntersect"

const DecorationLayyer = styled(a.div)`
  display: flex;
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;
  width: 100%;
  box-shadow: 0px 2px 11px 0px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
  ::before {
    content: " ";
    background: ${`radial-gradient(${variables.primary}, transparent)`};
    z-index: 0;
    height: 180px;
    position: absolute;
    -webkit-transform: rotate(-3deg);
    -ms-transform: rotate(-3deg);
    transform: rotate(-3deg);
    width: 1000px;
    bottom: -110px;
    right: -210px;
  }

  ::after {
    content: " ";
    z-index: 1;
    height: 250px;
    position: absolute;
    -webkit-transform: rotate(106deg);
    -ms-transform: rotate(106deg);
    transform: rotate(106deg);
    width: 1000px;
    bottom: 200px;
    right: -630px;
    opacity: 0.7;
    background: ${`radial-gradient(${variables.primaryLight}, transparent)`};
  }
`

const ProjectCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  flex-basis: 100%;
  width: 100%;
  box-shadow: 0px 2px 11px 0px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  padding: 30px 20px 100px;
  overflow: hidden;
  position: relative;
  ::before {
    content: " ";
    background: ${`radial-gradient(${variables.primary}, transparent)`};
    z-index: 0;
    height: 180px;
    position: absolute;
    -webkit-transform: rotate(-6deg);
    -ms-transform: rotate(-6deg);
    transform: rotate(-6deg);
    width: 700px;
    top: -90px;
    right: -90px;
  }

  ::after {
    content: " ";
    right: 0;
    z-index: 1;
    height: 180px;
    position: absolute;
    -webkit-transform: rotate(99deg);
    -ms-transform: rotate(99deg);
    transform: rotate(99deg);
    width: 1500px;
    top: -210px;
    left: -764px;
    opacity: 0.7;
    background: ${`radial-gradient(${variables.primaryLight}, transparent)`};
  }

  a {
    margin: auto auto 0;
    text-decoration: none;
    color: royalblue;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    padding: 12px 30px;
    border-radius: 30px;
    user-select: none;
    outline: 0;
    width: fit-content;
    background: white;
    color: royalblue;
    border: 1px solid royalblue;

    transition: 0.25s all ease;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.5);

    &:hover {
      background: royalblue;
      color: white;
    }
  }
`

const CardHeader = styled.div`
  width: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
`

const ProjectTitle = styled.h3`
  color: white;
`

const ProjectImage = styled(Image)`
  width: 80%;
  height: 80%;
  overflow: hidden;
  margin: 20px 0 30px;
  min-height: 170px;
  height: 25vw;
  /* border-radius: 30px; */
`

const Divider = styled.hr`
  margin: 15px -50px;
  padding: 0;
  height: 1px;
  box-shadow: 0px 2px 11px 0px rgba(0, 0, 0, 0.1);
`

const ProjectDescription = styled.div`
  font-weight: light;
  padding: 20px auto;
  margin: 0 auto 30px;
  ul {
    margin: 0 0 25px;
  }
`

const DescriptionPoint = styled.li`
  text-align: left;
`

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
      gnomefinder: file(absolutePath: { regex: "/gnomefinder.png/" }) {
        childImageSharp {
          fluid(maxWidth: 450) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pinterhooks: file(absolutePath: { regex: "/pinterhooks.png/" }) {
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
  //useIntersect devuelve ref y entry. ref es la referencia del elemento del cual queremos controlar su visualización en el viewport
  //entry es el objeto con la información de la posición del elemento
  const [ref, entry] = useIntersect({
    //threshold es la cantidad de elemento visible para que se dispare el evento
    threshold: buildThresholdArray(),
  })

  const ratio = format(entry.intersectionRatio)

  const cardsProps = useSpring({
    from: {
      opacity: 0,
      transform: `translate(0px, 100px)`,
    },
    to: {
      opacity: ratio > 0.5 ? 1 : 0,
      transform: ratio >= 0.3 ? `translate(0px, 0px)` : `translate(0px, 100px)`,
    },
  })

  return (
    <Column xs={12} sm={6} align="center">
      <DecorationLayyer id={id} ref={ref} style={cardsProps}>
        <ProjectCardContainer id={id}>
          <CardHeader>
            <ProjectTitle className={"bodyNormal"}>
              {project.title}
            </ProjectTitle>
            <ProjectImage
              fluid={images[project.name].childImageSharp.fluid}
              alt="project image"
            />
          </CardHeader>
          <Divider />
          <ProjectDescription>
            <ul>
              {project.description.map((point, id) => (
                <DescriptionPoint key={id} id={id}>
                  {point}
                </DescriptionPoint>
              ))}
            </ul>
          </ProjectDescription>
          <a href={project.demoUrl}>Visit Site</a>
        </ProjectCardContainer>
      </DecorationLayyer>
    </Column>
  )
}

export default ProjectCard

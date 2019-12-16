import React from "react"
import { useSpring, animated as a } from "react-spring"
import styled from "styled-components"

//Assets
import variables from "../../assets/styles/variables"

//Utils
import Column from "../../utils/grid/column"
import useIntersect from "../../utils/useIntersect"

const DecorationLayyer = styled.div`
  display: flex;
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;
  width: 100%;
  box-shadow: 0px 2px 11px 0px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
  ::before {
    content: " ";
    background: ${({ id }) =>
      id % 2 ? variables.primaryLight : variables.primary};
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
    opacity: 0.5;
    background: ${variables.primaryLight};
  }
`

const ProjectCardContainer = styled(a.div)`
  display: flex;
  flex-direction: column;
  text-align: center;
  flex-basis: 100%;
  width: 100%;
  box-shadow: 0px 2px 11px 0px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  padding: 20px;
  overflow: hidden;
  position: relative;
  ::before {
    content: " ";
    background: ${({ id }) =>
      id % 2 ? variables.primaryLight : variables.primary};
    z-index: 0;
    height: 180px;
    position: absolute;
    -webkit-transform: rotate(-5deg);
    -ms-transform: rotate(-5deg);
    transform: rotate(-5deg);
    width: 1000px;
    top: -110px;
    left: -210px;
  }

  ::after {
    content: " ";
    right: 0;
    z-index: 1;
    height: 180px;
    position: absolute;
    -webkit-transform: rotate(106deg);
    -ms-transform: rotate(106deg);
    transform: rotate(106deg);
    width: 1000px;
    top: -210px;
    left: -470px;
    opacity: 0.5;
    background: ${variables.primaryLight};
  }

  a {
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
    margin: 8px auto;
    background: white;
    color: royalblue;
    border: 1px solid royalblue;

    transition: 0.25s all ease;
    box-shadow: 0px 2px 11px 0px rgba(0, 0, 0, 0.5);

    &:hover {
      background: royalblue;
      color: white;
      border: 1px solid white;
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

const ProjectImage = styled.img`
  width: inherit;
  height: inherit;
  margin: 20px 0 30px;
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
  const { format } = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 2,
  })

  const buildThresholdArray = () => Array.from(Array(100).keys(), i => i / 100)
  //useIntersect devulve ref y entry. ref es la referencia del elemento del cual queremos controlar su visualización en el viewport
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
    <Column xs={12} sm={8} align="center" md={4}>
      <DecorationLayyer id={id} ref={ref} style={cardsProps}>
        <ProjectCardContainer id={id}>
          <CardHeader>
            <ProjectTitle className={"bodyNormal"}>
              {project.title}
            </ProjectTitle>
            <ProjectImage src={project.image} alt="project image" />
          </CardHeader>
          <Divider />
          <ProjectDescription>
            <ul>
              {project.description.map((point, id) => (
                <DescriptionPoint id={id}>{point}</DescriptionPoint>
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

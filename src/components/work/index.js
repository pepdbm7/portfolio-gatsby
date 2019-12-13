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

const Container = styled.section`
  background: white;
  position: relative;
  z-index: 0;
`

const Title = styled(a.h2)`
  color: black;
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

const ProjectsContainer = styled.div``

const ProjectCard = styled.div``

const ProjectTitle = styled.h2``

const ProjectSubtitle = styled.h3``

const ProjectDescription = styled.div``

const Point = styled.p``

const Work = ({ data: { id, title, projects } }) => {
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

  const titleProps = useSpring({
    from: {
      opacity: 0,
      transform: `translate(0px, 100px)`,
    },
    to: {
      opacity: ratio > 0.1 ? 1 : 0,
      transform: ratio > 0.1 ? `translate(0px, 0px)` : `translate(0px, 100px)`,
    },
  })

  return (
    <Container id={id} ref={ref}>
      <Wrapper>
        <Row>
          <Column xs={12}>
            <Title style={titleProps} className={"headingMedium"}>
              {title}
            </Title>
          </Column>
        </Row>
        <Row>
          <Column xs={12}>
            <ProjectsContainer>
              {projects.map((project, id) => (
                <ProjectCard id={id}>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectSubtitle>{project.subtitle}</ProjectSubtitle>
                  <ProjectDescription>
                    {project.description.map((point, id) => (
                      <Point id={id}>{point}</Point>
                    ))}
                  </ProjectDescription>
                </ProjectCard>
              ))}
            </ProjectsContainer>
          </Column>
        </Row>
        <Row>
          <Column xs={12}></Column>
        </Row>
      </Wrapper>
    </Container>
  )
}

export default Work

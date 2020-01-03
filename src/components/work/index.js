import React from "react"
import { useSpring, animated as a } from "react-spring"
import styled from "styled-components"
import PropTypes from "prop-types"

//Utils
import Wrapper from "../../utils/grid/wrapper"
import Row from "../../utils/grid/row"
import Column from "../../utils/grid/column"
import useIntersect from "../../utils/hooks/useIntersect"

//styles:
import { breakpoints } from "../../assets/styles/breakpoints"

//components:
import ProjectCard from "./projectCard"

const Container = styled.section`
  background: white;
  position: relative;
  z-index: 0;
  padding: 0 0 100px;
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

const Work = ({ data: { id, title, projects } }) => {
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
      transform: `translate3d(0px, 100px, 0)`,
    },
    to: {
      opacity: ratio > 0.1 ? 1 : 0,
      transform:
        ratio > 0.1 ? `translate3d(0px, 0px, 0)` : `translate3d(0px, 100px, 0)`,
    },
    config: { duration: 1000 },
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
          {projects.map((project, id) => (
            <ProjectCard key={id} id={id} project={project} />
          ))}
        </Row>
        <Row>
          <Column xs={12}></Column>
        </Row>
      </Wrapper>
    </Container>
  )
}

Work.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Work

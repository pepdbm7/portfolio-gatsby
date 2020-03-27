import React from "react"
import PropTypes from "prop-types"

// styled-components:
import { Container, Title, Description } from "./styled-components"

//Utils
import Wrapper from "../../utils/grid/wrapper"
import Row from "../../utils/grid/row"
import Column from "../../utils/grid/column"
import useIntersect from "../../utils/hooks/useIntersect"

import { useSpring } from "react-spring"

//components:
import ProjectCard from "./projectCard"

const Work = ({ data: { id, title, description, projects } }) => {
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

  const descriptionProps = useSpring({
    from: {
      opacity: 0,
      transform: `translate3d(0px, 120px, 0)`,
    },
    to: {
      opacity: ratio > 0.1 ? 1 : 0,
      transform:
        ratio > 0.1 ? `translate3d(0px, 0px, 0)` : `translate3d(0px, 120px, 0)`,
    },
    config: { duration: 1000 },
  })

  return (
    <Container id={id} ref={ref}>
      <Wrapper>
        <Row>
          <Column xs={12}>
            <Title
              style={titleProps}
              className={"headingMedium"}
              dangerouslySetInnerHTML={{ __html: title }}
            />
          </Column>
        </Row>
        <Row>
          <Column>
            <Description
              style={descriptionProps}
              dangerouslySetInnerHTML={{ __html: description }}
              className="bodyNormal"
            />
          </Column>
        </Row>
        <Row>
          {projects.map((project, id) => (
            <ProjectCard key={id} id={id} project={project} />
          ))}
        </Row>
      </Wrapper>
    </Container>
  )
}

Work.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Work

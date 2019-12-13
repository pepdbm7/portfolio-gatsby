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

const Contact = ({ data: { id, title, description } }) => {
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

          <Column xs={12}>
            <p>{description}</p>
          </Column>

          <form>
            Aqui va un formulario de netlify!
            <Wrapper>
              <Row>
                <Column xs="12" sm={8} align="center" direction="column">
                  <input
                    placeholder="Name"
                    style={{ border: "1px solid black", margin: "5px auto" }}
                  />
                  <input
                    placeholder="Email"
                    style={{ border: "1px solid black", margin: "5px auto" }}
                  />
                  <input
                    placeholder="Subject"
                    style={{ border: "1px solid black", margin: "5px auto" }}
                  />
                  <input
                    placeholder="Message"
                    style={{ border: "1px solid black", margin: "5px auto" }}
                  />
                  <button type="submit">Send</button>
                </Column>
              </Row>
            </Wrapper>
          </form>

          <Column xs={12}></Column>
        </Row>
      </Wrapper>
    </Container>
  )
}

export default Contact

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

//images:
import downloadIcon from "../../images/download_icon.svg"

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

const DownloadButtonContainer = styled(a.a)`
  background: ${variables.primary};
  color: white;
  margin: 40px auto 40px;
  border-radius: 30px;
  cursor: pointer;
  text-decoration: none;
  line-height: 24px;

  display: flex;
  flex-wrap: nowrap;

  transition: 0.25s;

  @media screen and (max-width: ${breakpoints.phone}px) {
    font-size: 14px;
    line-height: 21px;
  }

  &:hover,
  &:focus {
    background: ${variables.primaryDark};
  }
`

const LeftButton = styled.div`
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: bold;

  padding: 16px 20px;
`

const DonwloadIconBox = styled.div`
  border-left: 1px solid whitesmoke;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 20px;
`

const About = ({ data: { id, title, description, button } }) => {
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

  const [refButton, entryButton] = useIntersect({
    //threshold es la cantidad de elemento visible para que se dispare el evento
    threshold: 0.5,
  })

  const ratio = format(entry.intersectionRatio)
  const ratioButton = format(entryButton.intersectionRatio)

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

  const buttonProps = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: ratioButton > 0.5 ? 1 : 0,
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

          <Column xs={12}>
            <DownloadButtonContainer
              ref={refButton}
              style={buttonProps}
              href={"#"}
              target="_blank"
              download="cv"
              rel="noopener noreferrer"
            >
              <LeftButton>{button}</LeftButton>
              <DonwloadIconBox>
                <img src={downloadIcon} alt="download icon" />
              </DonwloadIconBox>
            </DownloadButtonContainer>
          </Column>
        </Row>
      </Wrapper>
    </Container>
  )
}

export default About

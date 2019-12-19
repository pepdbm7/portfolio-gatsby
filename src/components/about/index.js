import React, { useState, useEffect } from "react"
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

//utils:
import useWindowSize from "../../utils/useWindowSize"

const Section = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-bottom: 200px;
  color: black;

  @media screen and (min-width: ${breakpoints.tablet}px) {
    /* padding: 100vh 0 0; */
  }
`

const Title = styled(a.h2)`
  position: fixed;
  display: flex;
  justify-content: center;
  top: 160px;
  line-height: 39px;
`
const Content = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 20vh;
  margin: 100vh 0;
`

const Description = styled(a.div)`
  position: fixed;
  display: flex;
  justify-content: center;
  top: 45%;
  padding: 0 20%;
`

const DownloadButtonContainer = styled(a.a)`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  opacity: 1;
  background: ${variables.primary};
  color: white;
  margin: 40px auto 40px;
  border-radius: 30px;
  cursor: pointer;
  text-decoration: none;

  transition: 0.25s all ease;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);

  @media screen and (min-width: ${breakpoints.tablet}px) {
    position: fixed;
    bottom: 10%;

    line-height: 24px;
  }

  &:hover {
    opacity: 0.9 !important;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.6);
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

const SectionResponsive = styled.section`
  display: flex;
  height: fit-content;
  padding: 100px 0;
  color: black;
  text-align: center;
  overflow: hidden;

  @media screen and (min-width: ${breakpoints.tablet}px) {
    overflow: inherit;
  }
`

const TitleResponsive = styled(a.h2)`
  margin: 0 auto 60px;
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

  const [refContent, entryContent] = useIntersect({
    threshold: buildThresholdArray(),
  })

  //convertir intersectionRatio en valor con dos decimales
  const ratio = format(entry.intersectionRatio)
  const contentRatio = format(entryContent.intersectionRatio)

  const titleProps = useSpring({
    from: {
      display: "none",
      opacity: 0,
      transform: `translate(0, 100px)`,
    },
    to: {
      display: "flex",
      opacity: ratio > 0.3 ? 1 : 0,
      transform: ratio > 0.3 ? `translate(0, 0)` : `translate(0, 100px)`,
    },
  })

  const descriptionProps = useSpring({
    from: {
      display: "none",
      opacity: 0,
      transform: `translate(-130px, 0)`,
    },
    to: {
      display: "flex",
      opacity: contentRatio > 0.1 ? 1 : 0,
      transform:
        contentRatio > 0.1 ? `translate(0, 0)` : `translate(-130px, 0)`,
    },
  })

  const buttonProps = useSpring({
    from: { display: "none", opacity: 0, transform: `translate(130px, 0)` },
    to: {
      display: "flex",
      opacity: contentRatio > 0.15 ? 1 : 0,
      transform:
        contentRatio > 0.15 ? `translate(0, 0)` : `translate(130px, 0)`,
    },
  })

  const mobileTitleProps = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: ratio > 0.1 ? 1 : 0,
      transform: ratio > 0.1 ? `translate(0, 0)` : `translate(0, 100px)`,
    },
  })

  const widthWindow = useWindowSize()

  const [width, setWidth] = useState(null)

  useEffect(() => {
    setWidth(widthWindow.width)
  }, [widthWindow])

  const isResponsive = width < breakpoints.tablet
  useEffect(() => {
    console.log(ratio)
  }, [ratio])

  return width && typeof width === "number" ? (
    !isResponsive ? (
      <Section id={id} ref={ref}>
        <Title
          style={titleProps}
          className={"headingMedium"}
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <Content ref={refContent}>
          <Description style={descriptionProps}>
            <p
              className={"bodyNormal"}
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </Description>
          <DownloadButtonContainer
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
        </Content>
      </Section>
    ) : (
      <SectionResponsive id={id} ref={ref}>
        <Wrapper>
          <Row>
            <Column xs={12} sm={8} align="center">
              <TitleResponsive
                style={mobileTitleProps}
                className={"headingMedium"}
              >
                {title}
              </TitleResponsive>
            </Column>

            <Column xs={12}>
              <p style={descriptionProps} className="bodyNormal">
                {description}
              </p>
            </Column>

            <Column xs={12}>
              <DownloadButtonContainer
                className="bodySmall"
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
      </SectionResponsive>
    )
  ) : (
    <div>loading...</div>
  )
}

export default About

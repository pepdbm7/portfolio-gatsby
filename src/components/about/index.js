import React, { useState, useEffect, useRef } from "react"
import { useSpring, useTrail, animated as a } from "react-spring"
import styled from "styled-components"

//Utils
import Wrapper from "../../utils/grid/wrapper"
import Row from "../../utils/grid/row"
import Column from "../../utils/grid/column"
import useIntersect from "../../utils/hooks/useIntersect"

//Assets
import variables from "../../assets/styles/variables"

//styles:
import { breakpoints } from "../../assets/styles/breakpoints"

//images:
// import downloadIcon from "../../images/download_icon.svg"

//utils:
import useWindowSize from "../../utils/hooks/useWindowSize"

//components:
import Social from "./Social"
// import { Buble1, Buble2, Buble3, Buble4 } from "../bubles"
// import Particles from "./particles"

const Section = styled(a.section)`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 200vh;
  z-index: 1;
  background: deepskyblue;
  background: linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%);

  @media screen and (min-width: ${breakpoints.desktop}px) {
    height: 250vh;
  }
`

const ParallaxDiv = styled(a.div)`
  background: tomato;
  background: linear-gradient(
    to right,
    tomato 0%,
    ${variables.primaryDark} 100%
  );

  position: absolute;
  width: 100%;
  min-height: 100vh;
  height: fit-content;
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  padding: 100px 0;
  color: white;
  z-index: 3;
`

const Title = styled(a.h2)`
  @media screen and (min-width: ${breakpoints.tablet}px) {
    margin: 160px auto 120px;
    line-height: 39px;
  }
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 20vh;
  z-index: 1000;
`

const Description = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20%;
  margin: @media screen and (min-width: ${breakpoints.tablet}px) {
    p {
      max-width: 600px;
    }
  }
`

const SocialContainer = styled(a.div)`
  display: flex;
  justify-content: center;

  img {
    width: 2em;
    height: 2em;
    margin: 0 10px;
  }

  @media screen and (min-width: ${breakpoints.tablet}px) {
    margin: 100px auto;
    a {
      &:hover {
        transform: translate3d(0, -5px, 0);
        color: #ff0000;
      }
    }
  }
`

// const DownloadButtonContainer = styled(a.a)`
//   display: flex;
//   flex-wrap: nowrap;
//   justify-content: center;
//   opacity: 1;
//   background: ${variables.primary};
//   color: white;
//   margin: 40px auto 40px;
//   border-radius: 30px;
//   cursor: pointer;
//   text-decoration: none;

//   transition: 0.25s all ease;
//   box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);

//   @media screen and (min-width: ${breakpoints.tablet}px) {
//     margin: 0 auto 100px ;
//     margin:
//     line-height: 24px;
//   }
// `

// const LeftButton = styled.div`
//   height: inherit;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   text-align: center;
//   font-weight: bold;

//   padding: 16px 20px;
// `

// const DonwloadIconBox = styled.div`
//   border-left: 1px solid whitesmoke;
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   padding: 20px;
// `

const About = ({ data: { id, title, description, button } }) => {
  const widthWindow = useWindowSize()
  useEffect(() => {
    setWidth(widthWindow.width)
  }, [widthWindow])

  const [width, setWidth] = useState(null)

  //PARALLAX effect:

  const ref = useRef()

  //Usesprings for content animations:
  const { format } = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 2,
  })

  const buildThresholdArray = () => Array.from(Array(100).keys(), i => i / 100)

  const [parallaxdivRef, entry] = useIntersect({
    threshold: buildThresholdArray(),
  })

  const ratio = format(entry.intersectionRatio)
  const titleProps = useSpring({
    from: {
      opacity: 0,
      transform: `translate3d(0, 100px,0)`,
    },
    to: {
      opacity: ratio > 0.35 ? 1 : 0,
      transform:
        ratio > 0.35 ? `translate3d(0, 0,0)` : `translate3d(0, 100px,0)`,
    },
  })

  const descriptionTrail = useTrail(description.length, {
    from: { opacity: 0, transform: "translate3d(0,-40px,0)" },
    to: {
      opacity: ratio > 0.45 ? 1 : 0,
      transform:
        ratio > 0.45 ? "translate3d(0,0px,0)" : "translate3d(0,-40px,0)",
    },
  })

  const socialProps = useSpring({
    from: {
      opacity: 0,
      transform: `translate3d(-130px, 0, 0)`,
    },
    to: {
      opacity: ratio > 0.55 ? 1 : 0,
      transform:
        ratio > 0.55 ? `translate3d(0, 0,0)` : `translate3d(-130px, 0,0)`,
    },
  })

  // const buttonProps = useSpring({
  //   from: { opacity: 0, transform: `translate3d(0, -100px,0)` },
  //   to: {
  //     opacity: ratio > 0.6 ? 1 : 0,
  //     transform:
  //       ratio > 0.6 ? `translate3d(0, 0,0)` : `translate3d(0, -100px,0)`,
  //   },
  // })

  //Parallax effects:
  const [{ offset }, setOffset] = useSpring(() => ({ offset: 0 }))

  const parallaxShift = () => {
    const posY = ref && ref.current && ref.current.getBoundingClientRect().top
    const offset = window.pageYOffset - posY
    setOffset({ offset })
    // console.log("estoy observando about!!")
  }

  useEffect(() => {
    let observer = new IntersectionObserver(entries => {
      let [{ isIntersecting }] = entries
      if (isIntersecting) {
        window.addEventListener("scroll", parallaxShift)
      } else {
        window.removeEventListener("scroll", parallaxShift)
      }
    })
    observer.observe(ref.current)
  })

  const sectionOpacity = offset.interpolate(o => `${2 - o / 3000}`)
  const transitionContainer = offset.interpolate(o => `translateY(${o / 9}px)`)

  // const isResponsive = width < breakpoints.tablet

  return (
    <Section
      ref={ref}
      id={id}
      style={{
        opacity: sectionOpacity,
      }}
    >
      {/* <Buble1 top="20%" left="50%" />
        <Buble2 top="60%" left="20%" />
        <Buble3 top="80%" left="15%" />
        <Buble4 top="40%" left="85%" /> */}

      <ParallaxDiv
        ref={parallaxdivRef}
        style={{
          transform: transitionContainer,
        }}
      >
        <Title
          style={titleProps}
          className={"headingMedium"}
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <Wrapper>
          <Row>
            <Column xs={12}>
              <Content>
                <Description>
                  {description &&
                    descriptionTrail.map((props, i) => (
                      <a.p
                        key={i}
                        style={props}
                        className={"bodyNormal"}
                        dangerouslySetInnerHTML={{
                          __html: description[i],
                        }}
                      />
                    ))}
                </Description>

                <SocialContainer style={socialProps}>
                  <Social />
                </SocialContainer>

                {/* <DownloadButtonContainer
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
                </DownloadButtonContainer> */}
              </Content>
            </Column>
          </Row>
        </Wrapper>
      </ParallaxDiv>
    </Section>
    // ) : (
    //   <SectionResponsive id={id} ref={ref}>
    //     <Wrapper>
    //       <Row>
    //         <Column xs={12} sm={8} align="center">
    //           <TitleResponsive className={"headingMedium"}>
    //             {title}
    //           </TitleResponsive>
    //         </Column>

    //         <Column xs={12}>
    //           <p className="bodyNormal">{description}</p>
    //         </Column>

    //         <Column xs={12}>
    //           <Social />
    //         </Column>

    //         <Column xs={12}>
    //           <DownloadButtonContainer
    //             className="bodySmall"
    //             href={"#"}
    //             target="_blank"
    //             download="cv"
    //             rel="noopener noreferrer"
    //           >
    //             <LeftButton>{button}</LeftButton>
    //             <DonwloadIconBox>
    //               <img src={downloadIcon} alt="download icon" />
    //             </DonwloadIconBox>
    //           </DownloadButtonContainer>
    //         </Column>
    //       </Row>
    //     </Wrapper>
    //   </SectionResponsive>
    // )
    // ) : (
    //   <div>loading...</div>
  )
}

export default About

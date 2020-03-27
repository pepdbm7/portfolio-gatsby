import styled from "styled-components"
import Image from "gatsby-image"

//Assets
import variables from "../../assets/styles/variables"
import devices, { breakpoints } from "../../assets/styles/breakpoints"

// spring:
import { animated as a } from "react-spring"

const Section = styled(a.section)`
  overflow: hidden;
  display: flex;
  width: 100vw;
  min-height: 120vh;
  z-index: 1;

  background: slateblue;
  background: linear-gradient(
    to right,
    ${variables.primaryLight} 0%,
    ${variables.primary} 100%
  );
`

const Container = styled(a.div)`
  background: ${variables.primaryDark};
  background: linear-gradient(
    to right,
    SlateBlue 0%,
    ${variables.primaryDark} 100%
  );
  box-shadow: ${variables.shadow};

  width: 100%;
  height: fit-content;
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  padding: 100px 0;
  color: white;
  z-index: 3;
  margin: 0 0 20vh;

  @media ${devices.desktop} {
    margin: -10vh 0 25vh;
  }
`

const Title = styled(a.h2)`
  margin: 35px auto 60px;
  line-height: 39px;
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
  padding: 0 15%;
  user-select: none;

  @media ${devices.tablet} {
    p {
      max-width: 600px;
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

//    @media ${devices.tablet} {
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

const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px auto;
  margin: 60px auto 100px;

  img {
    width: 2em;
    height: 2em;
    margin: 0 10px;
  }

  @media ${devices.tablet} {
    a {
      &:hover {
        transform: translate3d(0, -5px, 0);
        color: #ff0000;
      }
    }
  }
`

export { Section, Container, Title, Content, Description, SocialContainer }

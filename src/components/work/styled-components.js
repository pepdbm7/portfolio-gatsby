import styled from "styled-components"
import Image from "gatsby-image"

//Assets
import variables from "../../assets/styles/variables"
import { breakpoints } from "../../assets/styles/breakpoints"

// spring:
import { animated as a } from "react-spring"

const Container = styled.section`
  background: whitesmoke;
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

const Description = styled(a.div)`
  margin: 0 0 60px;
  a {
    color: ${variables.primary};
    text-decoration: none;
    position: relative;

    :after {
      content: "";
      height: 1px;
      position: absolute;
      bottom: 0;
      right: 0;
      background: ${variables.primary};
      width: 100%;
      -webkit-transition: width 0.4s;
      transition: width 0.4s;
    }

    &:hover:after {
      width: 0;
    }
  }
`

const DecorationLayer = styled(a.div)`
  display: flex;
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;
  width: 100%;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  margin: 20px auto;
  user-select: none;
  max-width: 500px;

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
  background: white;
  text-align: center;
  flex-basis: 100%;
  width: 100%;
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

    transition: 0.4s all ease;

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
  text-shadow: 1px 1px 1px gray;
  font-size: 24px;
`

const ProjectSubTitle = styled.h4`
  color: ${variables.primaryLight};
  font-size: 20px;
`

const ProjectImageContainer = styled.div`
  width: 80%;
  height: 200px;
  margin: 15px auto 30px;
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.3);
`

const ProjectImage = styled(Image)`
  min-height: 170px;
  height: 100%;
  img {
    object-position: top !important;
  }
`

const Divider = styled.hr`
  margin: 15px 0;
  background: #d8d8d8;
  border: none;
  height: 1px;
`

const ProjectDescription = styled.div`
  font-weight: light;
  padding: 20px auto;
  margin: 30px auto 45px;
  ul {
    margin: 0;
  }
`

const DescriptionPoint = styled.li`
  text-align: left;
`

export {
  Container,
  Title,
  Description,
  DecorationLayer,
  ProjectCardContainer,
  CardHeader,
  ProjectTitle,
  ProjectSubTitle,
  ProjectImageContainer,
  ProjectImage,
  Divider,
  ProjectDescription,
  DescriptionPoint,
}

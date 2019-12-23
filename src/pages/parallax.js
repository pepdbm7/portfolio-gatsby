import React, { useRef } from "react"
import styled from "styled-components"
import { Parallax } from "react-spring/renderprops-addons"

import backgroundBlue from "../images/bluesmoke.jpg"

const ParallaxContainer = styled.div`
  gridcolumn: "span 2";
  gridrow: "span 2";
  background: white;

  .container > div > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .text {
    pointer-events: none;
    justify-content: start !important;
    font-family: "Kanit", sans-serif;
    line-height: 0px;
    text-transform: uppercase;
  }

  .number {
    font-size: 300px;
    color: #545864;
  }

  .number span {
    display: inline-block;
    position: relative;
    transform: translate3d(-35%, 0, 0);
  }

  .header {
    display: flex;
    justify-content: center !important;
    align-items: center;
    font-size: 50px;
    color: white;
  }

  .stripe {
    height: 2px;
    width: auto;
  }

  .slopeBegin {
    background-color: #20232f;
    background: url(${backgroundBlue});
    clip-path: polygon(20% 0, 70% 0, 50% 100%, 0% 100%);
  }

  .slopeEnd {
    clip-path: polygon(70% 0, 100% 0, 80% 100%, 50% 100%);
  }

  .slopeBegin,
  .slopeEnd {
    position: absolute;
    width: 170%;
    height: 100%;
    cursor: pointer;
  }

  .pink {
    background: linear-gradient(to right, deeppink 0%, coral 100%);
  }

  .teal {
    background: linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%);
  }

  .tomato {
    background: linear-gradient(to right, tomato 0%, gold 100%);
  }
`

const Page = ({ offset, caption, first, second, gradient, onClick }) => (
  <>
    <Parallax.Layer offset={offset} speed={0.2} onClick={onClick}>
      <div className="slopeBegin" />
    </Parallax.Layer>

    <Parallax.Layer offset={offset} speed={-0.2} onClick={onClick}>
      <div className={`slopeEnd ${gradient}`} />
    </Parallax.Layer>

    <Parallax.Layer className="text number" offset={offset} speed={0.3}>
      <span>0{offset + 1}</span>
    </Parallax.Layer>

    <Parallax.Layer className="text header" offset={offset} speed={0.4}>
      <span>
        <p style={{ fontSize: 20 }}>{caption}</p>
        <div className={`stripe ${gradient}`} />
        <p>{first}</p>
        <p>{second}</p>
      </span>
    </Parallax.Layer>
  </>
)

const ParallaxHero = () => {
  // const { title1, title2, subtitle, link, linkText } = data
  const parallaxRef = useRef(null)

  const scroll = to => parallaxRef.current.scrollTo(to)

  return (
    <ParallaxContainer>
      <Parallax
        className="container"
        ref={parallaxRef}
        pages={3}
        // horizontal
        scrolling={false}
      >
        <Page
          offset={0}
          gradient="pink"
          caption="Who am I"
          first="i am pep dev" //y añadir foto mia
          // second="dolor sit"
          onClick={() => scroll(1)}
        />
        <Page
          offset={2}
          gradient="teal"
          caption="what I do"
          first="I create cool websites and web apps"
          second="adipiscing elit"
          onClick={() => scroll(2)}
        />
        <Page
          offset={4}
          gradient="tomato"
          caption="what we want"
          first="Morbi quis"
          second="est dignissim"
          onClick={() => scroll(0)}
        />
      </Parallax>
    </ParallaxContainer>
  )
}

export default ParallaxHero

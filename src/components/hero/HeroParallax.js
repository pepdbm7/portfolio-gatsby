import React, { useRef } from "react"
import { Parallax } from "react-spring"
import "./styles.css"

const Page = ({ offset, caption, first, second, gradient, onClick }) => (
  <React.Fragment>
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
  </React.Fragment>
)

const ParallaxHero = () => {
  const parallaxRef = useRef(null)

  const scroll = to => parallaxRef.current.scrollTo(to)

  return (
    <div
      style={{
        gridColumn: "span 2",
        gridRow: "span 2",
        background: "#dfdfdf",
      }}
    >
      <Parallax
        className="container"
        ref={parallaxRef}
        pages={3}
        horizontal
        scrolling={false}
      >
        <Page
          offset={0}
          gradient="pink"
          caption="who we are"
          first="Lorem ipsum"
          second="dolor sit"
          onClick={() => scroll(1)}
        />
        <Page
          offset={1}
          gradient="teal"
          caption="what we do"
          first="consectetur"
          second="adipiscing elit"
          onClick={() => scroll(2)}
        />
        <Page
          offset={2}
          gradient="tomato"
          caption="what we want"
          first="Morbi quis"
          second="est dignissim"
          onClick={() => scroll(0)}
        />
      </Parallax>
    </div>
  )
}

export default ParallaxHero

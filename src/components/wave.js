import React from "react"
import styled, { keyframes } from "styled-components"
import PropTypes from "prop-types"
import { breakpoints } from "../assets/styles/breakpoints"

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: fit-content;
  z-index: 1;
  margin-top: 30px;
  ${({ orientation }) => orientation === "top" && "top: 0"};
  ${({ orientation }) =>
    orientation === "top" && "transform: matrix(1, 0, 0, -1, 0, 0)"};
  ${({ orientation }) => orientation === "bottom" && "bottom: 0"};
`

const smoooooth = keyframes`
  0% {
    d: path("M 27 10C 21 8 14 3 0 3L 0 0L 54 0L 54 14C 40 14 33 12 27 10Z");
  }

  50% {
    d: path("M 27 14C 12 14 5 7 0 7L 0 0L 54 0L 54 7C 49 7 42 14 27 14Z");
  }

  100% {
    d: path("M 27 10C 21 12 14 14 0 14L 0 0L 54 0L 54 3C 40 3 33 8 27 10Z");
  }
`

const InnerWave = styled.div`
  position: relative;
  height: 100%;
  transform: matrix(1, 0, 0, -1, 0, 0);
  svg {
    display: block;
    position: absolute;
    width: 100%;

    @media (max-width: ${breakpoints.large}) {
      height: 4.5rem;
    }
  }
`

const WaveSVG1 = styled.svg`
  height: 120px;
  path {
    fill: tomato;
    width: 100%;
    animation: ${smoooooth} 15s linear infinite alternate;
  }
  transform: scale(-1, 1);
`

const WaveSVG2 = styled.svg`
  height: 80px;
  path {
    fill: #ff8532;
    width: 100%;
    animation: ${smoooooth} 8s linear infinite alternate;
  }
`
const WaveSVG3 = styled.svg`
  height: 30px;
  path {
    fill: cornflowerblue;
    width: 120%;
    animation: ${smoooooth} 2s linear infinite alternate;
  }
  transform: scale(-1, 1);
`

const Wave = ({ orientation }) => (
  <Wrapper orientation={orientation}>
    <InnerWave>
      <WaveSVG1
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 54 14"
        preserveAspectRatio="none"
        aria-hidden="true"
        focusable="false"
      >
        <path>
          <animate
            attributeName="d"
            values="M 27 10C 21 8 14 3 0 3L 0 0L 54 0L 54 14C 40 14 33 12 27 10Z;M 27 14C 12 14 5 7 0 7L 0 0L 54 0L 54 7C 49 7 42 14 27 14Z;M 27 10C 21 12 14 14 0 14L 0 0L 54 0L 54 3C 40 3 33 8 27 10Z;M 27 10C 21 12 14 14 0 14L 0 0L 54 0L 54 3C 40 3 33 8 27 10Z;M 27 14C 12 14 5 7 0 7L 0 0L 54 0L 54 7C 49 7 42 14 27 14Z;M 27 10C 21 8 14 3 0 3L 0 0L 54 0L 54 14C 40 14 33 12 27 10Z"
            repeatCount="indefinite"
            dur="30s"
          />
        </path>
      </WaveSVG1>
    </InnerWave>
    <InnerWave>
      <WaveSVG2
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 54 14"
        preserveAspectRatio="none"
        aria-hidden="true"
        focusable="false"
      >
        <path>
          <animate
            attributeName="d"
            values="M 27 10C 21 8 14 3 0 3L 0 0L 54 0L 54 14C 40 14 33 12 27 10Z;M 27 14C 12 14 5 7 0 7L 0 0L 54 0L 54 7C 49 7 42 14 27 14Z;M 27 10C 21 12 14 14 0 14L 0 0L 54 0L 54 3C 40 3 33 8 27 10Z;M 27 10C 21 12 14 14 0 14L 0 0L 54 0L 54 3C 40 3 33 8 27 10Z;M 27 14C 12 14 5 7 0 7L 0 0L 54 0L 54 7C 49 7 42 14 27 14Z;M 27 10C 21 8 14 3 0 3L 0 0L 54 0L 54 14C 40 14 33 12 27 10Z"
            repeatCount="indefinite"
            dur="20s"
          />
        </path>
      </WaveSVG2>
    </InnerWave>
    <InnerWave>
      <WaveSVG3
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 54 14"
        preserveAspectRatio="none"
        aria-hidden="true"
        focusable="false"
      >
        <path>
          <animate
            attributeName="d"
            values="M 27 10C 21 8 14 3 0 3L 0 0L 54 0L 54 14C 40 14 33 12 27 10Z;M 27 14C 12 14 5 7 0 7L 0 0L 54 0L 54 7C 49 7 42 14 27 14Z;M 27 10C 21 12 14 14 0 14L 0 0L 54 0L 54 3C 40 3 33 8 27 10Z;M 27 10C 21 12 14 14 0 14L 0 0L 54 0L 54 3C 40 3 33 8 27 10Z;M 27 14C 12 14 5 7 0 7L 0 0L 54 0L 54 7C 49 7 42 14 27 14Z;M 27 10C 21 8 14 3 0 3L 0 0L 54 0L 54 14C 40 14 33 12 27 10Z"
            repeatCount="indefinite"
            dur="7s"
          />
        </path>
      </WaveSVG3>
    </InnerWave>
  </Wrapper>
)

export default Wave

Wave.propTypes = {
  orientation: PropTypes.oneOf(["top", "bottom"]),
}

Wave.defaultProps = {
  orientation: "bottom",
}

import React from "react"
import styled from "styled-components"
import { animated as a } from "react-spring"

const Buble = styled(a.div)`
  position: absolute;
  display: flex;
  z-index: 0;
  opacity: 0.3;
  user-select: none;
  -webkit-user-drag: none;
`

const Buble1 = ({ top, left, right, bottom, transform }) => (
  <Buble
    style={{
      top: top,
      left: left,
      right: right,
      bottom: bottom,
      transform: transform,
    }}
  >
    <svg
      width="600"
      height="600"
      viewBox="0 0 600 600"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(300,300)">
        <path
          d="M166.1,-187C211.4,-160,241.6,-104,241.7,-50.5C241.8,3,211.8,54,182.8,106.6C153.7,159.3,125.6,213.5,82.1,232.2C38.6,250.9,-20.2,234,-76.3,212.3C-132.3,190.7,-185.7,164.4,-215.2,120.7C-244.7,77,-250.4,15.9,-239.5,-41.6C-228.6,-99,-201.1,-152.9,-158.4,-180.4C-115.7,-207.9,-57.9,-208.9,1.3,-210.5C60.4,-212,120.8,-214,166.1,-187Z"
          fill="SlateBlue"
        />
      </g>
    </svg>
  </Buble>
)

const Buble2 = ({ top, left, right, bottom, transform }) => (
  <Buble
    style={{
      top: top,
      left: left,
      right: right,
      bottom: bottom,
      transform: transform,
    }}
  >
    <svg
      width="600"
      height="600"
      viewBox="0 0 600 600"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(300,300)">
        <path
          d="M150.1,-179.2C181.4,-152.5,184.7,-92.8,189,-37.9C193.2,17.1,198.4,67.3,183.3,117.6C168.3,167.9,133.1,218.3,84.9,237.7C36.8,257.2,-24.2,245.6,-65.6,215.3C-107,185,-128.8,136,-149.4,90.9C-170.1,45.7,-189.4,4.5,-181.3,-30.3C-173.3,-65.1,-137.7,-93.5,-102.9,-119.5C-68.1,-145.5,-34.1,-169.3,12.6,-184.3C59.4,-199.4,118.7,-205.8,150.1,-179.2Z"
          fill="#8ed1fc"
        />
      </g>
    </svg>
  </Buble>
)

const Buble3 = ({ top, left, right, bottom, transform }) => (
  <Buble
    style={{
      top: top,
      left: left,
      right: right,
      bottom: bottom,
      transform: transform,
    }}
  >
    <svg
      width="600"
      height="600"
      viewBox="0 0 600 600"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(300,300)">
        <path
          d="M104.5,-123.4C136.2,-98,163.1,-65.8,178.1,-24.9C193.1,16,196.1,65.5,178,108.4C159.9,151.2,120.7,187.4,73.4,206.8C26.2,226.2,-29,228.7,-67.6,205.9C-106.3,183.1,-128.5,135.1,-161.6,88.2C-194.7,41.4,-238.7,-4.2,-242.8,-53.6C-246.9,-102.9,-211.2,-156,-164.1,-178.7C-117,-201.4,-58.5,-193.7,-11,-180.6C36.4,-167.4,72.8,-148.8,104.5,-123.4Z"
          fill="cornflowerblue"
        />
      </g>
    </svg>
  </Buble>
)

const Buble4 = ({ top, left, right, bottom, transform }) => (
  <Buble
    style={{
      top: top,
      left: left,
      right: right,
      bottom: bottom,
      transform: transform,
    }}
  >
    <svg
      width="600"
      height="600"
      viewBox="0 0 600 600"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(300,300)">
        <path
          d="M75.1,-47.8C98.7,-2.3,120.4,39.8,107.5,60.7C94.7,81.7,47.3,81.3,8.2,76.6C-30.9,71.8,-61.8,62.7,-101.8,26.1C-141.7,-10.5,-190.8,-74.5,-175.4,-115.2C-159.9,-156,-80,-173.5,-27.1,-157.8C25.7,-142.2,51.4,-93.3,75.1,-47.8Z"
          fill="royalblue"
        />
      </g>
    </svg>
  </Buble>
)

export { Buble1, Buble2, Buble3, Buble4 }

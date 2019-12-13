import React from "react"
import styled from "styled-components"

import variables from "../../assets/styles/variables"

const RowLayout = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin-left: -${variables.gutter}px;
  margin-right: -${variables.gutter}px;
`

const Row = ({ children, align }) => {
  return <RowLayout align={align}>{children}</RowLayout>
}

export default Row

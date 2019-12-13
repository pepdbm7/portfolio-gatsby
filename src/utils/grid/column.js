import React from "react"
import styled from "styled-components"

import { breakpoints } from "../../assets/styles/breakpoints"
import variables from "../../assets/styles/variables"

const ColumnLayout = styled.div`
  display: flex;
  align-self: stretch;
  ${({ align }) => align === "center" && "margin: 0 auto;"}
  ${({ align }) => align === "left" && "margin-right: auto;"}
	${({ align }) => align === "right" && "margin-left: auto;"}
	${({ align }) => align === "bottom" && "margin-top: auto;"}
  ${({ align }) => align === "top" && "margin-bottom: auto;"}
	
	${({ direction }) => direction === "column" && "flex-direction: column;"}
  
  padding-left: ${variables.gutter}px;
  padding-right: ${variables.gutter}px;
  box-sizing: border-box;

	width: 100%;

	${({ xsOrder }) => xsOrder && "order: " + xsOrder + ";"}

	@media only screen and (min-width: ${breakpoints.tablet}px ){
		${({ smOrder }) => smOrder && "order: " + smOrder + ";"}
	}

	@media only screen and (min-width: ${breakpoints.desktop}px ){
		${({ mdOrder }) => mdOrder && "order: " + mdOrder + ";"}
	}

	@media only screen and (min-width: ${breakpoints.large}px ){
		${({ lgOrder }) => lgOrder && "order: " + lgOrder + ";"}
	}
	
	

  @media only screen and (min-width: ${breakpoints.phone}px ){
    ${({ xs }) => xs && "width: " + (xs / 12) * 100 + "%"}
    ${({ xsOffset }) =>
      xsOffset && "margin-left: " + (xsOffset / 12) * 100 + "%"}
  }
  
  @media only screen and (min-width: ${breakpoints.tablet}px ){
    ${({ sm }) => sm && "width: " + (sm / 12) * 100 + "%"}
  }

  @media only screen and (min-width: ${breakpoints.desktop}px ){
    ${({ md }) => md && "width: " + (md / 12) * 100 + "%"}
  }

  @media only screen and (min-width: ${breakpoints.large}px ){
    ${({ lg }) => lg && "width: " + (lg / 12) * 100 + "%"}
  }
`

const Column = ({
  children,
  xs,
  sm,
  md,
  lg,
  xsOffset,
  smOffset,
  mdOffset,
  lgOffset,
  xsOrder,
  smOrder,
  mdOrder,
  lgOrder,
  align,
  direction,
  className,
}) => {
  return (
    <ColumnLayout
      xs={xs}
      sm={sm}
      md={md}
      lg={lg}
      xsOffset={xsOffset}
      smOffset={smOffset}
      mdOffset={mdOffset}
      lgOffset={lgOffset}
      xsOrder={xsOrder}
      smOrder={smOrder}
      mdOrder={mdOrder}
      lgOrder={lgOrder}
      align={align}
      direction={direction}
      className={className}
    >
      {children}
    </ColumnLayout>
  )
}

export default Column

import React from "react"
import { createGlobalStyle } from "styled-components"

import variables from "../../assets/styles/variables"

//Assets
import "./index.scss"
import StoreProvider from "../store"

const GlobalStyle = createGlobalStyle`

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }


  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: ${variables.helvetica};
    font-size: 16px;
    line-height: 24px;
    margin: 0;
    padding: 0;
    overflow: inherit;
    overflow-x: hidden;
    text-align: center;
    
    
    &.scrollDisabled {
      overflow: hidden;
    }

  }
`

const Layout = ({ children }) => {
  return (
    <StoreProvider>
      <GlobalStyle />
      {children}
    </StoreProvider>
  )
}
export default Layout

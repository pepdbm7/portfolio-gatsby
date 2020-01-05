import React from "react"
import styled from "styled-components"

const FooterSection = styled.footer`
  width: 100vw;
  background: black;
  position: relative;
  color: white;
  font-weight: bold;
  min-height: 60px;
  display: flex;
  align-items: center;

  p {
    margin: 0 auto;
  }
`

const Footer = () => (
  <FooterSection>
    <p className="bodySmall">2020 PepDev</p>
  </FooterSection>
)

export default Footer

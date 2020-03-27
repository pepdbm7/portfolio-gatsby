import React from "react"
import PropTypes from "prop-types"
import {
  BurgerContainer,
  TopLine,
  MiddleLine,
  BottomLine,
} from "./styled-components"

const Burger = ({ isOpen, handleClick }) => (
  <BurgerContainer onClick={handleClick}>
    <TopLine isOpen={isOpen} />
    <MiddleLine isOpen={isOpen} />
    <BottomLine isOpen={isOpen} />
  </BurgerContainer>
)

Burger.propTypes = {
  isOpen: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
}

export default Burger

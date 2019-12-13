import React from "react"
import styled from "styled-components"

const BurgerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  margin: auto 0 auto auto;

  height: 19px;
  width: 27px;
  cursor: pointer;

  position: relative;

  div {
    display: flex;
    height: 3px;
    transition: all 0.2s ease;
    background-color: white;
  }
`

const TopLine = styled.div`
  transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "none")};
  transform-origin: top left;
  position: absolute;
  top: 0;
  left: 0;

  width: ${({ isOpen }) => (isOpen ? "24px" : "100%")};
`

const MiddleLine = styled.div`
  opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
  transform: ${({ isOpen }) => (isOpen ? "translateX(-16px)" : "none")};
  width: 100%;
`

const BottomLine = styled.div`
  transform: ${({ isOpen }) =>
    isOpen ? "translateX(-1px) rotate(-45deg)" : "none"};
  transform-origin: bottom left;
  position: absolute;
  bottom: 0;
  left: ${({ isOpen }) => (isOpen ? "1px" : "0")};

  width: ${({ isOpen }) => (isOpen ? "24px" : "100%")};
`

const Burger = ({ isOpenBurger, handleClick }) => (
  <BurgerContainer onClick={handleClick}>
    <TopLine isOpen={isOpenBurger} />
    <MiddleLine isOpen={isOpenBurger} />
    <BottomLine isOpen={isOpenBurger} />
  </BurgerContainer>
)

export default Burger

import styled, { css, keyframes } from 'styled-components'
import { Link } from 'gatsby'
import { colours } from '../../../styles'
import { respondTo } from '../../../utilities'

const { black, cream } = colours

const fadeInHeader = keyframes`
  from {
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`

export const StyledHeader = styled.header`
  background-color: ${black};
  box-sizing: border-box;
  height: 138px;
  padding-top: 32px;
  top: 0;
  width: 100vw;
  text-align: center;
  ${respondTo.S`
    align-items: center;
    display: flex;
    padding: 0 16px;
    // position: fixed;
    height: 60px;
    justify-content: center;
    ${({ showMobileNav }) =>
      showMobileNav &&
      css`
        animation: ${fadeInHeader} 0.6s ease-in-out;
        flex-direction: column;
        height: 216px;
      `}
  `}
`

export const StyledMenuButton = styled.button`
  background: none;
  border: none;
  display: initial;
  height: 40px;
  margin-right: -40px;
  outline: none;
  padding: 7px calc(7px / 2);
  width: 40px;
  z-index: 1;
  ${({ showMobileNav }) =>
    showMobileNav &&
    `
      margin: 32px 0;
      padding: 3px 8px;
    `}
`

export const StyledTitle = styled.h1`
  line-height: 0;
  margin: 0;
  ${respondTo.S`
    ${({ showMobileNav }) =>
      !showMobileNav &&
      `
        flex-grow: 2;
      `}
  `}
`

export const StyledTagLine = styled.p`
  font-size: 10px;
  margin: 0;
`

export const StyledNav = styled.nav`
  background-color: ${black};
  padding: 24px 0;
  text-transform: uppercase;
`

export const StyledNavUl = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
`

export const StyledNavLi = styled.li`
  line-height: 1;
  padding: 0 83px;
  ${respondTo.L`
    padding: 0 32px;
    text-align: center;
  `}
`

export const StyledNavLink = styled(Link)`
  color: ${cream};
  text-decoration: none;
`

const fadeInMobileNav = keyframes`
  to {
    opacity: 1;
  }
`

export const StyledMobileNav = styled.nav`
  animation: ${fadeInMobileNav} 0.6s ease-in-out 0s forwards;
  background-color: ${black};
  box-sizing: border-box;
  height: calc(100vh - 216px);
  opacity: 0;
  padding: 24px 0 0;
  position: fixed;
  text-transform: uppercase;
  top: 216px;
  width: 100vw;
`

export const StyledMobileNavUl = styled.ul`
  align-items: stretch;
  display: flex;
  flex-direction: column;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
`

const fadeInMobileNavLi = keyframes`
  to {
    opacity: 1;
  }
`

export const StyledMobileNavLi = styled.li`
  animation: ${fadeInMobileNavLi} 0.6s ease-in-out
    ${({ delay }) => `calc(${delay}s + 0.6s)`} forwards;
  opacity: 0;
  padding-top: 40px;
  text-align: center;
`

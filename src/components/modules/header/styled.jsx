import styled, { css, keyframes } from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { colours } from '../../../styles'
import { respondTo } from '../../../utilities'

const { white, black, cream, midnight } = colours

const fadeInHeader = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const StyledSiteHeader = styled.header`
  align-items: center;
  background-color: ${black};
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  height: 80px;
  position: sticky;
  top: 0;
  width: 100vw;
  z-index: 9;
  ${respondTo.S`
    height: 60px;
    justify-content: center;
    padding: 0 16px;
    text-align: center;
    ${({ showMobileNav }) =>
      showMobileNav &&
      css`
        animation: ${fadeInHeader} 0.6s ease-in-out;
        flex-direction: column;
        height: 216px;
        position: fixed;
      `}
  `}
`

export const StyledMenuButton = styled.button`
  align-items: center;
  background: none;
  border: none;
  display: flex;
  height: 40px;
  justify-content: center;
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
  padding-left: 144px;
  ${respondTo.M`
    padding-left: 64px;
  `}
  ${respondTo.S`
    padding: 0;
    ${({ showMobileNav }) =>
      !showMobileNav &&
      `
        flex-grow: 2;
      `}
  `}
`

export const StyledHomeLink = styled(Link)`
  display: block;
`

export const StyledTagline = styled.p`
  font-size: 9px;
  letter-spacing: 1.4px;
  padding-top: 4px;
  margin: 0;
  text-transform: uppercase;
`

export const StyledNav = styled.nav`
  background-color: ${black};
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
  padding-left: 40px;
  ${respondTo.M`
    padding-left: 24px;
  `}
`

export const StyledNavLink = styled(Link)`
  color: ${cream};
  font-size: 13px;
  letter-spacing: 2.4px;
  text-decoration: none;
  ${respondTo.M`
    letter-spacing: 0.4px;
  `}
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
  z-index: 9;
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
export const StyledSpacer = styled.div`
  height: 60px; 
`

export const StyledContainer = styled.section`
  align-items: center;
  background-color: ${({ bgcolor }) => bgcolor || midnight};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 80px 0;
  text-align: center;
  width: 100%;
  ${respondTo.M`
    padding: 64px 32px;
  `}
`

export const StyledSection = styled.section`
  max-width: 800px;
  width: 100%;
`

export const StyledInlineContainer = styled.section`
  align-items: center;
  background-color: ${({ bgcolor }) => bgcolor || midnight};
  color: ${({ color }) => color || white};
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 120px 0;
  ${respondTo.M`
    flex-direction: column;
    padding: 64px 0;
  `}
`

export const StyledSectionLeft = styled.section`
  align-items: flex-start;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0  120px;
  width: 50vw;
  ${respondTo.M`
    align-items: center;
    padding: 64px 24px 0;
    width: 100vw;
    order: 1;
    text-align: center
  `}
`

export const StyledSectionRight = styled.section`
  align-items: flex-start;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 120px 0 0;
  width: 50vw;
  ${respondTo.M`
    align-items: center;
    padding: 64px 24px 0;
    width: 100vw;
    order: 1;
    text-align: center
  `}
`

export const StyledImg = styled(Img)`
  display: block;
  width: 100%;
  height: auto;
`

export const StyledImageSectionLeft = styled.section`
  align-items: flex-end;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 0 64px 40px 120px;
  width: 60vw;
  ${respondTo.M`
    justify-content: center;
    padding: 0 24px;
    width: 100vw;
    order: 0;
  `}
`

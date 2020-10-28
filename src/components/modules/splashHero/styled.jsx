import styled, { keyframes } from 'styled-components'
import Img from 'gatsby-image'
import { colours } from '../../../styles'
import { respondTo } from '../../../utilities'

const { white } = colours
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`
export const StyledContainer = styled.section`
  align-items: center;
  background-color: ${white};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 80px);
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: -1;
  ${respondTo.S`
    justify-content: flex-end;
    padding: 0 24px 40px;
    height: calc(100vh - 60px);
  `}
`

export const StyledSliderSection = styled.section`
  animation: ${fadeIn} 2s ease-in-out 2s forwards;
  height: 100%;
  opacity: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 0;
`

export const StyledImg = styled(Img)`
  display: block;
  width: 100vw;
  height: calc(100vh - 80px);
  ${respondTo.S`
    width: 100vw;
    height: auto;
  `}
`

export const StyledSection = styled.section`
  animation: ${fadeIn} 2s ease-in-out forwards;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: 0;
  text-align: center;
  z-index: 1;
`

export const StyledLinkSpacer = styled.div`
  animation: ${fadeIn} 2s ease-in-out 4s forwards;
  opacity: 0;
  padding-top: 24px;
`

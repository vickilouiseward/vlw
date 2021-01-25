import styled, { keyframes, css } from 'styled-components'
import Img from 'gatsby-image'
import { colours } from '../../../styles'
import { respondTo } from '../../../utilities'

const { black } = colours
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`
export const StyledContainer = styled.section`
  background-color: ${black};
  box-sizing: border-box;
  height: 100vh;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: -1;
  ${respondTo.S`
    justify-content: flex-end;
    padding: 0 24px 64px;
  `}
`

export const StyledSliderSection = styled.section`
  height: 100%;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 0;
  animation: ${fadeIn} 2s ease-in-out 2s forwards;
  opacity: 0;
`

export const StyledImg = styled(Img)`
  display: block;
  width: 100vw;
  height: 100vh;
`

export const StyledSection = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  z-index: 1;
  animation: ${fadeIn} 2s ease-in-out forwards;
  opacity: 0;
`

export const StyledSpacer = styled.div`
  margin-bottom: 100vh;
`

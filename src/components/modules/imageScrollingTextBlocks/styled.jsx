import styled from 'styled-components'
import Img from 'gatsby-image'
import { colours } from '../../../styles'
import { respondTo } from '../../../utilities'

const { white, midnight } = colours

export const StyledContainer = styled.section`
  background-color: ${midnight};
  color: ${white};
  display: flex;
  flex-direction: row;
  position: relative;
  z-index: -1;
  ${respondTo.S`
    flex-direction: column;
  `}
`

export const StyledImgSection = styled.section`
  align-self: flex-start;
  position: sticky;
  width: 50vw;
  top: 0;
  z-index: 1;
  ${respondTo.S`
    width: 100vw;
    order: 0;
  `}
`

export const StyledFadeTop = styled.div`
  background: linear-gradient(${midnight} 80px, transparent 100%);
  height: 200px;
  position: absolute;
  right: -100%;
  top: 0;
  width: 50vw;
  ${respondTo.S`
    background: linear-gradient(${midnight} 0%, transparent 100%);
    bottom: -80px;
    height: 80px;
    right: 0;
    top: auto;
    width: 100vw;
  `}
`

export const StyledImg = styled(Img)`
  display: block;
  width: 50vw;
  height: 100vh;
  ${respondTo.S`
    width: 100vw;
    height: 60vw;
  `}
`

export const StyledScrollingSection = styled.section`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 120px 24px;
  position: relative;
  width: 50vw;
  ${respondTo.S`
    padding: 80px 24px;
    width: 100vw;
    order: 1;
  `}
`

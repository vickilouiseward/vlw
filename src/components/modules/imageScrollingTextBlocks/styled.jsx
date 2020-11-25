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
  ${respondTo.S`
    flex-direction: column;
  `}
`

export const StyledImgSection = styled.section`
  width: 50vw;
  ${respondTo.S`
    width: 100vw;
    height: 100vw;
    order: 0;
  `}
`

export const StyledImg = styled(Img)`
  display: block;
  width: 50vw;
  height: calc(100vh - 80px);
  ${respondTo.S`
    width: 100vw;
    height: 100vw;
  `}
`

export const StyledScrollingWrapper = styled.section`
  position: relative;
  width: 50vw;
  ${respondTo.S`
    width: 100vw;
    order: 1;
  `}
`

export const StyledScrollingSection = styled.section`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow-y: scroll;
  padding: 120px 24px;
  height: calc(100vh - 80px);
  ${respondTo.S`
    padding: 64px 24px;
    height: calc(100vh - 60px);
  `}
`

export const StyledFadeTop = styled.div`
  background: linear-gradient(${midnight} 0%, transparent 100%);
  height: 120px;
  position: absolute;
  top: 0;
  width: 100%;
  ${respondTo.S`
    height: 64px;
  `}
`

export const StyledFadeBottom = styled.div`
  background: linear-gradient(transparent 0%, ${midnight} 100%);
  bottom: 0;
  height: 120px;
  position: absolute;
  width: 100%;
  ${respondTo.S`
    height: 64px;
  `}
`

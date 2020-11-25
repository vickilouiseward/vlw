import styled from 'styled-components'
import Img from 'gatsby-image'
import { colours, dropShadow } from '../../../styles'
import { respondTo } from '../../../utilities'

const { white, midnight } = colours

export const StyledContainer = styled.section`
  background-color: ${({ $light }) => $light ? white : midnight};
  display: flex;
  flex-direction: row;
  justify-content: center;
  ${respondTo.S`
    flex-direction: column;
  `}
`

export const StyledCtaSectionRight = styled.section`
  align-items: flex-end;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: -72px;
  padding-right: 120px;
  width: 40vw;
  ${respondTo.M`
    padding-right: 64px;
  `}
  ${respondTo.S`
    padding: 64px 24px;
    width: 100vw;
    order: 1;
  `}
`

export const StyledCtaSectionLeft = styled.section`
  align-items: flex-start;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: -72px;
  padding-left: 120px;
  width: 40vw;
  ${respondTo.M`
    padding-left: 64px;
  `}
  ${respondTo.S`
    padding: 64px 24px;
    width: 100vw;
    order: 1;
  `}
`

export const StyledImgLg = styled(Img)`
  box-shadow: ${dropShadow};
  display: block;
  height: 100%;
  width: 60%;
  z-index: 0;
`

export const StyledImgSm = styled(Img)`
  box-shadow: ${dropShadow};
  display: block;
  height: 70%;
  width: 40%;
  z-index: 1;
`

export const StyledImageSectionRight = styled.section`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  height: 40vw;
  padding-right: 120px;
  width: 60vw;
  ${respondTo.M`
    padding-right: 64px;
  `}
  ${respondTo.S`
    height: 70vw;
    padding: 0 24px;
    width: 100vw;
    order: 0;
  `}
  & > ${StyledImgSm} {
    margin-left: -5%;
  }
`

export const StyledImageSectionLeft = styled.section`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  height: 40vw;
  padding-left: 120px;
  width: 60vw;
  ${respondTo.M`
    padding-left: 64px;
  `}
  ${respondTo.S`
    height: 70vw;
    padding: 0 24px;
    width: 100vw;
    order: 0;
  `}
  & > ${StyledImgSm} {
    margin-right: -5%;
  }
`

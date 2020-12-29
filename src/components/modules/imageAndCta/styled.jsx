import styled from 'styled-components'
import Img from 'gatsby-image'
import { colours, dropShadow } from '../../../styles'
import { respondTo } from '../../../utilities'

const { white, midnight, pastelPink } = colours

export const StyledContainer = styled.section`
  background-color: ${({ $light }) => $light ? white : midnight};
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 120px;
  ${respondTo.S`
    flex-direction: column;
    padding-bottom: 64px;
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
    align-items: center;
    padding: 64px 24px 0;
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
    align-items: center;
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
    justify-content: center;
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
    justify-content: center;
    padding: 0 24px;
    width: 100vw;
    order: 0;
  `}
  & > ${StyledImgSm} {
    margin-right: -5%;
  }
`

export const StyledTitleContainer = styled.section`
  background-color: ${pastelPink};
  color: ${midnight};
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 72px 0 90px;
  ${respondTo.S`
    flex-direction: column;
    padding: 64px 0 0;
  `}
  & > ${StyledImageSectionLeft} {
    align-items: flex-end;
    & > ${StyledImgLg} {
      margin-right: -5%;
    }
    & > ${StyledImgSm} {
      margin: 0 0 -2%;
    }
  }
  & > ${StyledCtaSectionRight} {
    align-items: center;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0;
    padding: 0 24px;
    width: 50vw;
    ${respondTo.S`
      padding: 64px 24px;
      width: 100vw;
      order: 1;
    `}
  }
`

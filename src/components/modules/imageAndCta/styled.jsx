import styled from 'styled-components'
import Img from 'gatsby-image'
import { colours } from '../../../styles'
import { respondTo } from '../../../utilities'

const { midnight, silver } = colours

export const StyledContainer = styled.section`
  background-color: ${midnight};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 96px 0 24px;
  &:before {
    background-color: ${silver};
    content: "";
    display: block;
    height: 1px;
    margin: 0 auto 120px;
    max-width: 1200px;
    opacity: 0.5;
    width: calc(100% - 80px);
  }
  ${respondTo.S`
    flex-direction: column;
    padding-top: 0;
    &:before {
      margin-bottom: 64px;
      width: calc(100% - 64px)
    }
  `}
`

export const StyledCtaSection = styled.section`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: -72px;
  padding: 0 24px;
  width: 40vw;
  ${respondTo.S`
    padding: 64px 24px;
    width: 100vw;
    order: 1;
  `}
`

export const StyledImgLg = styled(Img)`
  display: block;
  height: 100%;
  width: 60%;
  z-index: 0;
`

export const StyledImgSm = styled(Img)`
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
  justify-content: center;
  height: 40vw;
  padding-right: 48px;
  width: 60vw;
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
  justify-content: center;
  height: 40vw;
  padding-left: 48px;
  width: 60vw;
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

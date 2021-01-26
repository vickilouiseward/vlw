import Img from 'gatsby-image'
import styled from 'styled-components'
import { respondTo } from '../../../utilities'

export const StyledColumn = styled.section`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const StyledContainer = styled.section`
  align-items: flex-start;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0 48px 120px;
  & > ${StyledColumn}:nth-child(1) {
    width: calc(5 / 12 * 100%);
  }
  & > ${StyledColumn}:nth-child(2) {
    width: calc(3 / 12 * 100%);
  }
  & > ${StyledColumn}:nth-child(3) {
    width: calc(4 / 12 * 100%);
  }
  ${respondTo.S`
    // flex-direction: column;
    padding: 0;
    & > ${StyledColumn}:nth-child(1) {
      width: calc(100% / 3 * 2);
    }
    & > ${StyledColumn}:nth-child(2) {
      width: calc(100% / 3);
    }
  `}
`

export const StyledImgWrapper = styled.section`
  box-sizing: border-box;
  padding: 12px;
  width: 100%;
  ${respondTo.S`
    padding: 1px;
  `}
`

export const StyledImg = styled(Img)`
  display: block;
  height: auto;
  width: 100%;
`

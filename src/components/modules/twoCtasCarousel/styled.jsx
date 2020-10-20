import styled from 'styled-components'
import Img from 'gatsby-image'
import { respondTo } from '../../../utilities'

export const StyledContainer = styled.section`
  display: flex;
  flex-direction: row;
  height: 940px;
  ${respondTo.S`
    height: auto;
    flex-direction: column;
    margin-top: 60px;
  `}
`

export const StyledCtaSection = styled.section`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 24px 128px;
  width: 50vw;
  ${respondTo.S`
    padding-bottom: 64px;
    width: 100vw;
    order: 1;
  `}
`

export const StyledSliderSection = styled.section`
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
  height: 940px;
  ${respondTo.S`
    width: 100vw;
    height: 100vw;
  `}
`

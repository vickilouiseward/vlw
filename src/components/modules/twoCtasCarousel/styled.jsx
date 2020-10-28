import styled from 'styled-components'
import Img from 'gatsby-image'
import { colours } from '../../../styles'
import { respondTo } from '../../../utilities'

const { midnight } = colours

export const StyledContainer = styled.section`
  background-color: ${midnight};
  display: flex;
  flex-direction: row;
  height: 850px;
  ${respondTo.S`
    height: auto;
    flex-direction: column;
  `}
`

export const StyledCtaSection = styled.section`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 24px;
  width: 50vw;
  ${respondTo.S`
    padding: 64px 24px;
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
  height: 850px;
  ${respondTo.S`
    width: 100vw;
    height: 100vw;
  `}
`

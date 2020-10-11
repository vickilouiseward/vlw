import styled from 'styled-components'
import Img from 'gatsby-image'
import { colours } from '../../../styles'

const { charcoal } = colours

export const StyledContainer = styled.section`
  background-color: ${charcoal};
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const StyledSection = styled.section`
  align-items: baseline;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 0 24px 96px;
`

export const StyledImgWrapper = styled.section`
  display: block;
  height: 460px;
  width: 100vw;
`

export const StyledImg = styled(Img)`
  display: block;
  height: 460px;
  width: 100vw;
`

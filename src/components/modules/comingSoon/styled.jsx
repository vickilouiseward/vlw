import Img from 'gatsby-image'
import styled from 'styled-components'
import { colours } from '../../../styles'
import { respondTo } from '../../../utilities'

const { midnight, white } = colours

export const StyledContainer = styled.section`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  // > section {
  //   padding-bottom: 0
  // }
`

export const StyledSection = styled.section`
  align-items: center;
  background-color: ${white};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 96px 0;
  width: 100vw;
`

export const StyledLogo = styled.svg`
  height: auto;
  width: 500px;
  ${respondTo.S`
    width: 260px;
  `}
`

export const StyledImg = styled(Img)`
  display: block;
  height: auto;
  width: 160px;
  ${respondTo.S`
    width: 90px;
  `}
`

export const StyledTagLine = styled.p`
  color: ${midnight};
  font-size: 18px;
  margin: 0;
  ${respondTo.S`
    font-size: 10px;
  `}
`

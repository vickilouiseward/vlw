import styled from 'styled-components'
import Img from 'gatsby-image'
import { colours } from '../../../styles'
import { respondTo } from '../../../utilities'

const { charcoal } = colours

export const StyledContainer = styled.section`
  background-color: ${charcoal};
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const StyledSection = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const StyledImg = styled(Img)`
  display: block;
  height: 760px;
  width: 100vw;
  ${respondTo.S`
    height: 160vw;
  `}
`

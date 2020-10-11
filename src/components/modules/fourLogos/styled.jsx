import styled from 'styled-components'
import Img from 'gatsby-image'
import { colours } from '../../../styles'

const { charcoal } = colours

export const StyledContainer = styled.section`
  background-color: ${charcoal};
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 80px 24px;
`

export const StyledImg = styled(Img)`
  display: block;
`

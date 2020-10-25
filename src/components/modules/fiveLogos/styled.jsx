import styled from 'styled-components'
import Img from 'gatsby-image'
import { colours } from '../../../styles'
import { respondTo } from '../../../utilities'

const { midnight } = colours

export const StyledContainer = styled.section`
  background-color: ${midnight};
  padding: 64px 24px;
`

export const StyledSection = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  height: 72px;
  overflow: hidden;
  text-align: center;
`

export const StyledImg = styled(Img)`
  margin: 0 50px;
  ${respondTo.M`
    margin: 0;
  `}
`

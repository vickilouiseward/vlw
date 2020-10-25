import styled from 'styled-components'
import { colours } from '../../../styles'
import { respondTo } from '../../../utilities'

const { pastelPink } = colours

export const StyledContainer = styled.section`
  background-color: ${pastelPink};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 64px;
`

export const StyledSection = styled.section`
  align-items: baseline;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 0 24px 96px;
  ${respondTo.S`
    flex-direction: column;
    padding-bottom: 64px;
  `}
`

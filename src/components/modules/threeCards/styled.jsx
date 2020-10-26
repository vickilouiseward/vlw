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
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0 24px 96px;
  ${respondTo.S`
    align-items: center;
    flex-direction: column;
    padding: 0 0 64px;
  `}
`

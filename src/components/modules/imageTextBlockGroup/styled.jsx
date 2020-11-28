import styled from 'styled-components'
import { respondTo } from '../../../utilities'

export const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 120px 80px;
  ${respondTo.S`
  padding: 64px 24px;
  `}
`

export const StyledSection = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`

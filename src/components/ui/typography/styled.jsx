import styled from 'styled-components'
import { respondTo } from '../../../utilities'

export const StyledH2 = styled.h2`
  color: ${({ color }) => (color || 'inherit')};
  font-family: Northwell, serif;
  font-size: 48px;
  font-weight: normal;
  line-height: 78px;
  margin: 0;
  ${respondTo.M`
    font-size: 32px;
    line-height: 52px;
  `}
`

export const StyledH3 = styled.h3`
  color: ${({ color }) => (color || 'inherit')};
  font-family: Amiri, serif;
  font-size: 24px;
  font-weight: normal;
  line-height: 42px;
  margin: 0;
`

export const StyledParagraph = styled.p`
  color: ${({ color }) => (color || 'inherit')};
  font-family: Amiri;
  font-size: 16px;
  line-height: 28px;
  margin: 16px 0 24px;
`

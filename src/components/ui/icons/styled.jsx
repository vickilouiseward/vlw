import styled from 'styled-components'
import { respondTo } from '../../../utilities'

export const StyledMenuIcon = styled.svg`
  height: 26px;
  width: 32px;
`

export const StyledCloseIcon = styled.svg`
  height: 34px;
  width: 24px;
`

export const StyledLogo = styled.svg`
  height: 56px;
  width: 218px;
  ${respondTo.S`
    height: 40px;
    width: 156px;
    ${({ scaleUp }) =>
      scaleUp &&
      `
        height: 77px;
        width: 300px;
      `
    }
  `}
`

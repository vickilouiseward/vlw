import styled from 'styled-components'
import { colours } from '../../../styles'
import { respondTo } from '../../../utilities'

const { midnight } = colours

export const StyledMenuIcon = styled.svg`
  height: 26px;
  width: 32px;
`

export const StyledCloseIcon = styled.svg`
  height: 34px;
  width: 24px;
`

export const StyledHeaderLogo = styled.svg`
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

export const StyledInstaIcon = styled.svg`
  height: 20px;
  padding: 0 8px 2px;
  width: 20px;
`

export const StyledLogo = styled.svg`
  height: auto;
  width: 500px;
  ${respondTo.S`
    width: 260px;
  `}
`

export const StyledTagline = styled.p`
  color: ${midnight};
  font-size: 18px;
  margin: 0;
`

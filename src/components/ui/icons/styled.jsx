import styled from 'styled-components'
import { colours } from '../../../styles'
import { respondTo } from '../../../utilities'

const { midnight } = colours

export const StyledMenuIcon = styled.svg`
  height: 20px;
  width: 24px;
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
  padding: 0 8px 2px 0;
  width: 20px;
`

export const StyledLogo = styled.svg`
  height: auto;
  width: 500px;
  ${respondTo.S`
    height: auto;
    width: 300px;
  `}
`

export const StyledTagline = styled.p`
  color: ${midnight};
  font-size: 12px;
  letter-spacing: 4px;
  padding-top: 4px;
  margin: 0;
  text-transform: uppercase;
  ${respondTo.S`
    font-size: 9px;
    letter-spacing: 1.4px;
    text-transform: uppercase;
  `}
`

export const StyledCCIcon = styled.svg`
  height: auto;
  width: 300px;
`

export const StyledStepIcon = styled.svg`
  height: 80px;
  max-height: 80px;
  min-height: 80px;
  width: auto;
`

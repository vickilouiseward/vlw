import styled from 'styled-components'
import { Link } from 'gatsby'
import { colours } from '../../../styles'
import { respondTo } from '../../../utilities'

const { black, midnight, cream } = colours

export const StyledCtaSection = styled.section`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 72px;
  max-width: 460px;
  text-align: center;
  ${respondTo.S`
    padding-top: 64px;
    & + &:before {
      background-color: ${cream};
      content: "";
      height: 1px;
      margin-bottom: 64px;
      opacity: 0.2;
      width: 200px;
    }
  `}
`

export const StyledLink = styled.a`
  color: ${({ color }) => (color || black)};
  font-family: Amiri;
  font-size: 16px;
  font-weight: bold;
  line-height: 28px;
  ${respondTo.M`
    font-size: 14px;
    line-height: 24px;
  `}
`

export const StyledButton = styled.button`
  background-color: ${({ $outline }) => $outline ? 'transparent' : cream};
  border: 1px solid  ${({ $light }) => $light ? midnight : cream};
  box-sizing: border-box;
  color: ${({ $outline }) => $outline ? cream : midnight};
  font-family: Amiri;
  font-size: 14px;
  height: 38px;
  letter-spacing: 2.33px;
  line-height: 38px;
  min-width: 160px;
  padding: 0 23px;
  opacity: ${({ disabled }) => disabled ? 0.5 : 1};
  outline: none;
  text-transform: uppercase;
  ${respondTo.M`
    margin-top: 16px;
  `}
`

export const StyledLinkButton = styled(Link)`
  background-color: ${({ $outline }) => $outline ? 'transparent' : cream};
  border: 1px solid  ${({ $light }) => $light ? midnight : cream};
  box-sizing: border-box;
  color: ${({ $outline }) => $outline ? cream : midnight};
  display: inline-block;
  font-family: Amiri;
  font-size: 14px;
  letter-spacing: 2.33px;
  line-height: 38px;
  min-width: 160px;
  padding: 0 23px;
  outline: none;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
`

export const StyledExternalLinkButton = styled.a`
  background-color: ${({ $outline }) => $outline ? 'transparent' : cream};
  border: 1px solid  ${({ $light }) => $light ? midnight : cream};
  box-sizing: border-box;
  color: ${({ $outline }) => $outline ? cream : midnight};
  display: inline-block;
  font-family: Amiri;
  font-size: 14px;
  letter-spacing: 2.33px;
  line-height: 38px;
  min-width: 160px;
  padding: 0 23px;
  outline: none;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
`

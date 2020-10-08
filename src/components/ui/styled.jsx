import styled from 'styled-components'
import { Link } from 'gatsby'
import { colours } from '../../styles'
import { respondTo } from '../../utilities'

const { black, charcoal, cream } = colours

export const StyledMenuIcon = styled.svg`
  height: 26px;
  width: 32px;
`

export const StyledCloseIcon = styled.svg`
  height: 34px;
  width: 24px;
`

export const StyledLogo = styled.svg`
  height: 77px;
  width: 300px;
  ${({ scaleDown }) =>
    scaleDown &&
    `
      height: 40px;
      width: 156px;
    `}
`

export const StyledCtaSection = styled.section`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 120px;
  text-align: center;
`

export const StyledH2 = styled.h2`
  color: ${({ color }) => (color ? color : black)};
  font-family: Northwell, serif;
  font-size: 48px;
  font-weight: normal;
  line-height: 78px;
  margin: 120px auto 0;
  ${respondTo.M`
    font-size: 32px;
    line-height: 52px;
  `}
`

export const StyledH3 = styled.h3`
  color: ${({ color }) => (color ? color : black)};
  font-family: Amiri, serif;
  font-size: 24px;
  font-weight: normal;
  line-height: 42px;
  margin: 0 auto;
`

export const StyledParagraph = styled.p`
  color: ${({ color }) => (color ? color : black)};
  font-family: Amiri;
  font-size: 16px;
  line-height: 28px;
  margin: 16px auto 24px;
  max-width: 520px;
`

export const StyledButton = styled.button`
  background: ${cream};
  border: 1px solid ${charcoal};
  color: ${charcoal};
  font-family: Amiri;
  font-size: 14px;
  letter-spacing: 2.33px;
  line-height: 38px;
  padding: 0 23px;
  outline: none;
  text-transform: uppercase;
`

export const StyledLinkButton = styled(Link)`
  background: ${cream};
  border: 1px solid ${charcoal};
  color: ${charcoal};
  display: inline-block;
  font-family: Amiri;
  font-size: 14px;
  letter-spacing: 2.33px;
  line-height: 38px;
  padding: 0 23px;
  outline: none;
  text-decoration: none;
  text-transform: uppercase;
`

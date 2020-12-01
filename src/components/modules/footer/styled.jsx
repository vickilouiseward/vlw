import styled from 'styled-components'
import { colours } from '../../../styles'
import { respondTo } from '../../../utilities'

const { black, white, silver } = colours

export const StyledFooter = styled.footer`
  align-items: flex-start;
  background-color: ${black};
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 40px 64px;
  text-transform: uppercase;
  width: 100%;
  ${respondTo.S`
    align-items: center;
    flex-direction: column;
    padding: 64px 24px;
  `}
`

export const StyledSection = styled.section`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  height: 85px;
  justify-content: space-between;
  & + & {
    border-left: 1px solid ${silver};
    padding-left: 40px;
  }
  ${respondTo.S`
    align-items: center;
    & + & {
      border-left: none;
      border-top: 1px solid ${silver};
      margin-top: 40px;
      padding: 40px 0 0;
    }
  `}
`

export const StyledLink = styled.a`
  color: ${white};
  display: inline-flex;
  font-size: 13px;
  letter-spacing: 2.3px;
  line-height: 23px;
  text-decoration: none;
`

export const StyledText = styled.p`
  font-size: 12px;
  letter-spacing: 2.3px;
  line-height: 21px;
  margin: 0;
`

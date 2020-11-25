import styled from 'styled-components'
import { colours } from '../../../styles'
import { respondTo } from '../../../utilities'

const { black, silver } = colours

export const StyledBlockquote = styled.blockquote`
  align-items: center;
  background-image: url("data:image/svg+xml,%3Csvg width='32' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M23.143 24c3.047 0 5.238-2.634 5.238-5.659 0-2.731-2-4.975-4.952-4.975-.858 0-1.905.293-2.572.878l-.38-.195c.475-4.293 4.38-9.659 10.856-12.878L30.667 0c-9.524 4.293-14 9.756-14 16.683 0 4.39 2.476 7.317 6.476 7.317zM6.476 24c3.048 0 5.238-2.634 5.238-5.659 0-2.731-2-4.975-4.952-4.975-.857 0-1.905.293-2.572.878l-.38-.195C4.286 9.756 8.19 4.39 14.667 1.17L14 0C4.476 4.293 0 9.756 0 16.683 0 21.073 2.476 24 6.476 24z' fill='%231D1D1B' fill-rule='nonzero' opacity='.784'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: center 24px;
  box-sizing: border-box;
  color: ${({ color }) => (color || black)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding: 64px 24px 0;
  text-align: center;
  max-width: 468px;
  width: 100%;
  ${respondTo.M`
    padding: 64px 0 0;
  `}
`

export const StyledStandfirst = styled.p`
  color: ${({ color }) => (color || black)};
  font-family: Amiri;
  font-size: ${({ callout }) => callout ? '24px' : '16px'};
  font-weight: bold;
  line-height: ${({ callout }) => callout ? '42px' : '28px'};
  margin: 16px auto 0;
  &:after {
    background-color: ${silver};
    content: "";
    display: block;
    height: 1px;
    margin: 24px auto 0;
    width: 180px;
  }
  ${respondTo.M`
    font-size: ${({ callout }) => callout ? '20px' : '14px'};
    font-weight: bold;
    line-height: ${({ callout }) => callout ? '32px' : '24px'};
  `}
`

export const StyledQuoteText = styled.p`
  color: ${({ color }) => (color || 'inherit')};
  font-family: Amiri;
  font-size: 16px;
  line-height: 28px;
  margin: 16px auto 24px;
  ${respondTo.M`
    font-size: 14px;
    line-height: 24px;
  `}
`

export const StyledCite = styled.cite`
  color: ${({ color }) => (color || black)};
  font-family: Northwell, serif;
  font-size: 32px;
  font-style: normal;
  line-height: 52px;
  ${respondTo.M`
    font-size: 24px;
    line-height: 40px;
  `}
`

export const StyledCiteExtra = styled.span`
  color: ${({ color }) => (color || black)};
  display: block;
  font-family: Amiri;
  font-size: 14px;
  line-height: 26px;
  letter-spacing: 2.3px;
`

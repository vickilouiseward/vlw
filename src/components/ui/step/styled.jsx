import styled from 'styled-components'
import { colours } from '../../../styles'
import { respondTo } from '../../../utilities'

const { black, cream } = colours

export const StyledStep = styled.section`
  align-items: center;
  box-sizing: border-box;
  color: ${({ color }) => (color || black)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding: 40px 24px 0;
  text-align: center;
  max-width: 520px;
  width: 100%;
  & + &:before {
    background-color: ${cream};
    content: "";
    height: 1px;
    margin-bottom: 64px;
    opacity: 0.2;
    width: 200px;
  }
  ${respondTo.M`
    padding: 64px 0;
  `}
`

export const StyledStepNumber = styled.div`
  font-family: Northwell, serif;
  font-size: 32px;
  font-style: normal;
  line-height: 52px;
  ${respondTo.M`
    font-size: 24px;
    line-height: 40px;
  `}
`

import styled from 'styled-components'
import { respondTo } from '../../../utilities'

export const StyledContainer = styled.section`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 900px;
  text-align: center;
  width: 100%;
  ${respondTo.M`
    padding: 0 24px;
    max-width: 368px;
  `}
`

export const StyledSection = styled.section`
  align-items: flex-end;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding-bottom: 32px;
  text-align: left;
  ${respondTo.M`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 0;
  `}
`

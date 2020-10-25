import styled from 'styled-components'
import { respondTo } from '../../../utilities'

export const StyledContainer = styled.section`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: 900px;
  padding: 64px 0;
  text-align: center;
  width: 100%;
  ${respondTo.M`
    padding: 64px 24px;
    max-width: 368px;
  `}
`

export const StyledSection = styled.section`
  max-width: 600px;
  width: 100%;
`

export const StyledFormSection = styled.section`
  align-items: flex-end;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding-bottom: 32px;
  text-align: left;
  width: 100%;
  ${respondTo.M`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 0;
  `}
`

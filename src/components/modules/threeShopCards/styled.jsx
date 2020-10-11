import styled from 'styled-components'
import { colours } from '../../../styles'

const { pastelPink } = colours

export const StyledContainer = styled.section`
  background-color: ${pastelPink};
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const StyledSection = styled.section`
  align-items: baseline;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 0 24px 96px;
`
